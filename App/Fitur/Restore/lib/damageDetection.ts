// App/Fitur/Restorasi/lib/damageDetection.ts

export type DamageLevel = 'ringan' | 'sedang' | 'berat';

export async function detectDamage(file: File): Promise<DamageLevel> {
  const imageBitmap = await createImageBitmap(file);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = imageBitmap.width;
  canvas.height = imageBitmap.height;
  ctx?.drawImage(imageBitmap, 0, 0);

  const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
  if (!imageData) return 'sedang';

  const pixels = imageData.data;
  let totalContrast = 0;
  let totalSharpness = 0;
  let noiseCount = 0;

  for (let i = 0; i < pixels.length; i += 4 * 10) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    const avg = (r + g + b) / 3;
    const contrast = Math.abs(r - avg) + Math.abs(g - avg) + Math.abs(b - avg);
    totalContrast += contrast;

    if (Math.abs(r - g) > 20 || Math.abs(g - b) > 20) {
      noiseCount++;
    }
  }

  const contrastScore = totalContrast / (pixels.length / 4);
  const noiseRatio = noiseCount / (pixels.length / 4);

  // Asumsi penilaian awal
  if (contrastScore > 50 && noiseRatio < 0.1) {
    return 'ringan';
  } else if (contrastScore > 30 && noiseRatio < 0.3) {
    return 'sedang';
  } else {
    return 'berat';
  }
}
