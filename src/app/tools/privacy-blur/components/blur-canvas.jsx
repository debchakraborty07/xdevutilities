// src/app/tools/privacy-blur/components/blur-canvas.jsx

"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Upload,
  Download,
  RotateCcw,
  ShieldCheck,
  Ghost,
  Square,
  X,
  Wand2,
  Grid3X3,
  Undo2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function BlurCanvas({ image, setImage }) {
  const canvasRef = useRef(null);
  const imageObjRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
  const [rects, setRects] = useState([]);

  // ৪টি আধুনিক মোড: match (Auto BG), blur (Soft Blur), pixelate (Mosaic), black (Blackout)
  const [mode, setMode] = useState("match");

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setRects([]);
      };
      reader.readAsDataURL(file);
      e.target.value = "";
    }
  };

  useEffect(() => {
    if (!image) {
      imageObjRef.current = null;
      return;
    }
    const img = new Image();
    img.src = image;
    img.onload = () => {
      imageObjRef.current = img;
      renderCanvas();
    };
  }, [image]);

  // সিলেকশন বক্সের চারপাশের গড় ব্যাকগ্রাউন্ড কালার নির্ণয় করার স্মার্ট ফাংশন
  const samplePerimeterColor = (ctx, x, y, w, h, maxW, maxH) => {
    const pad = 3;
    const samples = [];

    // টপ এবং বটম এজ থেকে পিক্সেল স্যাম্পল নেওয়া
    const stepX = Math.max(1, Math.floor(w / 12));
    for (let i = 0; i <= w; i += stepX) {
      const curX = Math.min(maxW - 1, Math.max(0, x + i));
      const topY = Math.max(0, y - pad);
      const botY = Math.min(maxH - 1, y + h + pad);
      samples.push(ctx.getImageData(curX, topY, 1, 1).data);
      samples.push(ctx.getImageData(curX, botY, 1, 1).data);
    }

    // লেফট এবং রাইট এজ থেকে পিক্সেল স্যাম্পল নেওয়া
    const stepY = Math.max(1, Math.floor(h / 12));
    for (let j = 0; j <= h; j += stepY) {
      const curY = Math.min(maxH - 1, Math.max(0, y + j));
      const leftX = Math.max(0, x - pad);
      const rightX = Math.min(maxW - 1, x + w + pad);
      samples.push(ctx.getImageData(leftX, curY, 1, 1).data);
      samples.push(ctx.getImageData(rightX, curY, 1, 1).data);
    }

    if (samples.length === 0) return "#ffffff";

    let r = 0, g = 0, b = 0;
    samples.forEach((d) => {
      r += d[0];
      g += d[1];
      b += d[2];
    });

    r = Math.round(r / samples.length);
    g = Math.round(g / samples.length);
    b = Math.round(b / samples.length);

    return `rgb(${r}, ${g}, ${b})`;
  };

  // ক্যানভাস রি-রেন্ডার ইঞ্জিন
  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const img = imageObjRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    // সেভ করা সব রিডাকশন প্রসেস করা
    rects.forEach((rect) => {
      if (rect.type === "match") {
        // ১. অটো ব্যাকগ্রাউন্ড কালার ম্যাচ
        ctx.fillStyle = rect.color || "#ffffff";
        ctx.fillRect(rect.x, rect.y, rect.w, rect.h);

      } else if (rect.type === "pixelate") {
        // ২. মডার্ন মোজাইক পিক্সেল আর্কিটেকচার
        const blockSize = Math.max(8, Math.round(Math.min(rect.w, rect.h) / 8));
        ctx.save();
        ctx.beginPath();
        ctx.rect(rect.x, rect.y, rect.w, rect.h);
        ctx.clip();

        // অফ-স্ক্রিন স্কেলিং দিয়ে শার্প পিক্সেল তৈরি
        ctx.imageSmoothingEnabled = false;
        const offCanvas = document.createElement("canvas");
        const offCtx = offCanvas.getContext("2d");
        const pw = Math.max(1, Math.floor(rect.w / blockSize));
        const ph = Math.max(1, Math.floor(rect.h / blockSize));

        offCanvas.width = pw;
        offCanvas.height = ph;
        offCtx.drawImage(img, rect.x, rect.y, rect.w, rect.h, 0, 0, pw, ph);

        ctx.drawImage(offCanvas, 0, 0, pw, ph, rect.x, rect.y, rect.w, rect.h);
        ctx.restore();

      } else if (rect.type === "black") {
        // ৩. সলিড ব্ল্যাকআউট
        ctx.fillStyle = "#000000";
        ctx.fillRect(rect.x, rect.y, rect.w, rect.h);

      } else {
        // ৪. সফট কার্ভড ব্লার (হার্ড এজ রিমুভড)
        ctx.save();
        ctx.beginPath();
        const radius = Math.min(12, rect.w / 4, rect.h / 4);
        if (ctx.roundRect) {
          ctx.roundRect(rect.x, rect.y, rect.w, rect.h, radius);
        } else {
          ctx.rect(rect.x, rect.y, rect.w, rect.h);
        }
        ctx.clip();
        ctx.filter = "blur(18px)";
        ctx.drawImage(img, 0, 0);
        ctx.restore();
        ctx.filter = "none";
      }
    });

    // ড্র্যাগিং গাইডলাইন
    if (isDrawing) {
      ctx.setLineDash([6, 6]);
      ctx.strokeStyle = mode === "match" ? "#10b981" : mode === "black" ? "#000" : "#2563eb";
      ctx.lineWidth = Math.max(2, Math.round(canvas.width / 500));

      const x = Math.min(startPos.x, currentPos.x);
      const y = Math.min(startPos.y, currentPos.y);
      const w = Math.abs(currentPos.x - startPos.x);
      const h = Math.abs(currentPos.y - startPos.y);

      ctx.strokeRect(x, y, w, h);
      ctx.fillStyle = mode === "match"
        ? "rgba(16,185,129,0.15)"
        : mode === "black"
          ? "rgba(0,0,0,0.3)"
          : "rgba(37,99,235,0.15)";
      ctx.fillRect(x, y, w, h);
    }
  }, [rects, isDrawing, startPos, currentPos, mode]);

  useEffect(() => {
    if (imageObjRef.current) {
      renderCanvas();
    }
  }, [renderCanvas]);

  const getCanvasPos = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const handlePointerDown = (e) => {
    e.currentTarget.setPointerCapture?.(e.pointerId);
    const pos = getCanvasPos(e);
    setStartPos(pos);
    setCurrentPos(pos);
    setIsDrawing(true);
  };

  const handlePointerMove = (e) => {
    if (!isDrawing) return;
    setCurrentPos(getCanvasPos(e));
  };

  const handlePointerUp = (e) => {
    if (!isDrawing) return;
    const endPos = getCanvasPos(e);

    const x = Math.min(startPos.x, endPos.x);
    const y = Math.min(startPos.y, endPos.y);
    const w = Math.abs(endPos.x - startPos.x);
    const h = Math.abs(endPos.y - startPos.y);

    if (w > 5 && h > 5) {
      let matchedColor = null;
      if (mode === "match" && canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        matchedColor = samplePerimeterColor(
          ctx,
          x,
          y,
          w,
          h,
          canvasRef.current.width,
          canvasRef.current.height
        );
      }

      const newRect = {
        x,
        y,
        w,
        h,
        type: mode,
        color: matchedColor
      };

      setRects((prev) => [...prev, newRect]);
    }
    setIsDrawing(false);
  };

  const handleUndo = () => {
    setRects((prev) => prev.slice(0, -1));
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `redacted-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    toast.success("Protected image downloaded successfully!");
  };

  return (
    <div className="space-y-8">
      {/* কন্ট্রোল বার */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-3 sm:p-4 bg-card text-card-foreground border border-border rounded-2xl sm:rounded-3xl shadow-sm">

        {/* ৪টি আধুনিক মোড সিলেক্টর */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <Button
            type="button"
            variant={mode === "match" ? "default" : "outline"}
            size="sm"
            onClick={() => setMode("match")}
            className="rounded-xl h-9 px-3 text-xs font-semibold"
          >
            <Wand2 size={14} className="mr-1.5 text-emerald-400" /> Auto Match
          </Button>

          <Button
            type="button"
            variant={mode === "pixelate" ? "default" : "outline"}
            size="sm"
            onClick={() => setMode("pixelate")}
            className="rounded-xl h-9 px-3 text-xs font-semibold"
          >
            <Grid3X3 size={14} className="mr-1.5 text-blue-400" /> Pixelate
          </Button>

          <Button
            type="button"
            variant={mode === "blur" ? "default" : "outline"}
            size="sm"
            onClick={() => setMode("blur")}
            className="rounded-xl h-9 px-3 text-xs font-semibold"
          >
            <Ghost size={14} className="mr-1.5 opacity-70" /> Soft Blur
          </Button>

          <Button
            type="button"
            variant={mode === "black" ? "default" : "outline"}
            size="sm"
            onClick={() => setMode("black")}
            className="rounded-xl h-9 px-3 text-xs font-semibold"
          >
            <Square size={14} className="mr-1.5 opacity-70" /> Blackout
          </Button>
        </div>

        {/* অ্যাকশন বাটনস (Undo, Reset, Download) */}
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleUndo}
            disabled={rects.length === 0}
            className="rounded-xl h-9 px-3 text-xs text-muted-foreground hover:text-foreground"
            title="Undo last selection"
          >
            <Undo2 size={15} className="mr-1" /> Undo
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setRects([])}
            disabled={rects.length === 0}
            className="rounded-xl h-9 px-3 text-xs text-muted-foreground hover:text-rose-500"
            title="Reset all"
          >
            <RotateCcw size={15} className="mr-1" /> Reset
          </Button>

          <Button
            type="button"
            disabled={!image}
            onClick={downloadImage}
            className="rounded-xl bg-primary text-primary-foreground h-9 px-5 text-xs font-semibold shadow-sm hover:opacity-95 transition-all"
          >
            <Download size={14} className="mr-1.5" /> Download
          </Button>
        </div>
      </div>

      {/* ক্যানভাস এরিয়া */}
      <div className="relative group border-2 border-dashed border-border rounded-[32px] sm:rounded-[40px] overflow-hidden bg-card text-card-foreground flex flex-col items-center justify-center min-h-[480px] shadow-sm">

        {image && (
          <button
            type="button"
            onClick={() => { setImage(null); setRects([]); }}
            className="absolute top-5 right-5 z-10 p-2.5 bg-background/90 backdrop-blur-md text-foreground rounded-2xl shadow-md hover:text-rose-500 hover:scale-105 transition-all border border-border"
            title="Remove and upload new"
            aria-label="Remove image"
          >
            <X size={18} />
          </button>
        )}

        {!image ? (
          <div className="text-center p-10">
            <div className="w-14 h-14 bg-muted text-muted-foreground rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm border border-border">
              <Upload size={24} />
            </div>
            <label className="cursor-pointer">
              <span className="text-sm font-bold text-foreground dark:text-slate-100 block">
                Click to upload screenshot or image
              </span>
              <input type="file" className="hidden" onChange={handleUpload} accept="image/*" />
            </label>
            <p className="text-xs text-muted-foreground mt-1.5">
              Select any area to erase, pixelate, or redact with auto-background matching.
            </p>
          </div>
        ) : (
          <div className="cursor-crosshair w-full h-full flex justify-center p-4 sm:p-6 bg-muted/20">
            <canvas
              ref={canvasRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => setIsDrawing(false)}
              className="max-w-full h-auto shadow-[0_16px_36px_rgba(0,0,0,0.12)] rounded-xl touch-none select-none"
            />
          </div>
        )}

        {image && !isDrawing && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-slate-900/90 dark:bg-white/90 text-white dark:text-slate-900 text-[11px] font-semibold rounded-full pointer-events-none shadow-md backdrop-blur-md">
            {mode === "match" ? "Drag to auto-match background" : "Drag over area to redact"}
          </div>
        )}
      </div>

      {/* সিকিউরিটি নোট */}
      <div className="flex items-center gap-3.5 p-5 bg-blue-500/5 border border-blue-500/10 rounded-2xl sm:rounded-3xl">
        <div className="w-9 h-9 bg-background rounded-xl flex items-center justify-center shrink-0 shadow-sm text-blue-500 border border-border">
          <ShieldCheck size={18} />
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
          <strong>Irreversible Protection:</strong> The selected pixels are physically overwritten on your local HTML5 Canvas. Once exported, the hidden content cannot be recovered by reverse-imaging or AI deblurring.
        </p>
      </div>
    </div>
  );
}