// src/app/tools/privacy-blur/components/blur-canvas.tsx

"use client";
import { useState, useRef, useEffect } from "react";
import { Upload, Download, RotateCcw, ShieldCheck, Ghost, Square, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function BlurCanvas({ image, setImage }: any) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 }); // ড্র্যাগ করার সময় পজিশন ট্র্যাকিং
  const [rects, setRects] = useState<any[]>([]);
  const [mode, setMode] = useState<"blur" | "black">("blur");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setRects([]);
      };
      reader.readAsDataURL(file);
    }
  };

  // ক্যানভাস রি-ড্র লজিক (ছবি + পুরাতন ব্লার + বর্তমান ড্র্যাগিং এরিয়া)
  useEffect(() => {
    if (!image) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = image;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // ১. সেভ করা সব এরিয়া ড্র করা
      rects.forEach((rect) => {
        if (rect.type === "black") {
          ctx.fillStyle = "black";
          ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
        } else {
          ctx.save();
          ctx.beginPath();
          ctx.rect(rect.x, rect.y, rect.w, rect.h);
          ctx.clip();
          ctx.filter = "blur(15px)";
          ctx.drawImage(img, 0, 0);
          ctx.restore();
          ctx.filter = "none";
        }
      });

      // ২. বর্তমান ড্র্যাগিং এরিয়া (Visual Guide) ড্র করা
      if (isDrawing) {
        ctx.setLineDash([5, 5]); // ড্যাশড লাইন
        ctx.strokeStyle = mode === "black" ? "#000" : "#3b82f6";
        ctx.lineWidth = 2;
        
        const x = Math.min(startPos.x, currentPos.x);
        const y = Math.min(startPos.y, currentPos.y);
        const w = Math.abs(currentPos.x - startPos.x);
        const h = Math.abs(currentPos.y - startPos.y);
        
        ctx.strokeRect(x, y, w, h);
        ctx.fillStyle = mode === "black" ? "rgba(0,0,0,0.2)" : "rgba(59,130,246,0.1)";
        ctx.fillRect(x, y, w, h);
      }
    };
  }, [image, rects, isDrawing, currentPos]);

  const getMousePos = (e: any) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const startDrawing = (e: any) => {
    const pos = getMousePos(e);
    setStartPos(pos);
    setCurrentPos(pos);
    setIsDrawing(true);
  };

  const onMouseMove = (e: any) => {
    if (!isDrawing) return;
    setCurrentPos(getMousePos(e));
  };

  const endDrawing = (e: any) => {
    if (!isDrawing) return;
    const endPos = getMousePos(e);
    
    const newRect = {
      x: Math.min(startPos.x, endPos.x),
      y: Math.min(startPos.y, endPos.y),
      w: Math.abs(endPos.x - startPos.x),
      h: Math.abs(endPos.y - startPos.y),
      type: mode
    };

    if (newRect.w > 5 && newRect.h > 5) {
      setRects([...rects, newRect]);
    }
    setIsDrawing(false);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "privacy-protected.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    toast.success("Protected image downloaded!");
  };

  return (
    <div className="space-y-8">
      {/* কন্ট্রোল বার */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-background text-foreground border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm">
        <div className="flex items-center gap-2">
          <Button 
            variant={mode === "blur" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setMode("blur")}
            className="rounded-xl h-10 px-4"
          >
            <Ghost size={16} className="mr-2" /> Blur
          </Button>
          <Button 
            variant={mode === "black" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setMode("black")}
            className="rounded-xl h-10 px-4"
          >
            <Square size={16} className="mr-2" /> Blackout
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setRects([])} className="rounded-xl text-muted-foreground hover:text-rose-500">
            <RotateCcw size={16} className="mr-2" /> Reset
          </Button>
          <Button disabled={!image} onClick={downloadImage} className="rounded-xl bg-background text-foreground h-10 px-6 font-bold shadow-lg">
            Download
          </Button>
        </div>
      </div>

      {/* ক্যানভাস এরিয়া */}
      <div className="relative group border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[40px] overflow-hidden bg-background text-foreground flex flex-col items-center justify-center min-h-[500px]">
        
        {/* ক্যানসেল বাটন (ছবি থাকা অবস্থায় দেখাবে) */}
        {image && (
          <button 
            onClick={() => { setImage(null); setRects([]); }}
            className="absolute top-6 right-6 z-10 p-3 bg-background text-foreground rounded-2xl shadow-xl text-rose-500 hover:scale-110 transition-all border border-slate-100 dark:border-slate-700"
            title="Remove and upload new"
          >
            <X size={20} />
          </button>
        )}

        {!image ? (
          <div className="text-center p-12">
            <div className="w-16 h-16 bg-background text-foreground rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100 dark:border-slate-800">
              <Upload className="text-slate-400" size={28} />
            </div>
            <label className="cursor-pointer">
              <span className="text-sm font-bold text-foreground dark:text-slate-100 block">Click to upload screenshot</span>
              <input type="file" className="hidden" onChange={handleUpload} accept="image/*" />
            </label>
            <p className="text-[11px] text-muted-foreground mt-2">Privacy focus: Processing stays in your browser.</p>
          </div>
        ) : (
          <div className="cursor-crosshair w-full h-full flex justify-center p-8 bg-background text-foreground">
            <canvas 
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={onMouseMove}
              onMouseUp={endDrawing}
              onMouseLeave={() => setIsDrawing(false)}
              className="max-w-full h-auto shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] rounded-lg"
            />
          </div>
        )}
        
        {image && !isDrawing && (
           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-background text-foreground backdrop-blur-md text-white text-[10px] font-bold rounded-full pointer-events-none">
             Click and drag to redact
           </div>
        )}
      </div>

      <div className="flex items-center gap-4 p-6 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-[2.5rem]">
        <div className="w-10 h-10 bg-background text-foreground rounded-xl flex items-center justify-center shrink-0 shadow-sm text-blue-500">
           <ShieldCheck size={20} />
        </div>
        <p className="text-[12px] text-blue-700 dark:text-blue-300 leading-relaxed font-medium">
          The original image data under the blur is physically overwritten during processing. Once you download the file, the hidden information is mathematically irrecoverable.
        </p>
      </div>
    </div>
  );
}