// src/lib/get-cropped-img.js

export const getCroppedImg = async (imageSrc, pixelCrop) => {
  const image = new Image();
  image.src = imageSrc;

  // Cross-origin image loading issues theke bachar jnno (jodi external URL hoy)
  image.crossOrigin = "anonymous";

  await new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = (error) => reject(new Error("Failed to load image for cropping."));
  });

  const canvas = document.createElement("canvas");
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("No 2d context available.");

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("Canvas is empty or blob generation failed."));
        return;
      }
      resolve(blob);
    }, "image/jpeg", 0.95); // Quality parameter optional (0.95 rakha holo best output-er jnno)
  });
};