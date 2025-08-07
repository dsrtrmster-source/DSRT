// App/Fitur/Restorasi/utils/validator.ts

export type ValidationResult = {
  allowed: boolean;
  reasons: string[];
};

export async function validateImage(file: File): Promise<ValidationResult> {
  const reasons: string[] = [];

  // Cek ukuran file
  if (file.size > 10 * 1024 * 1024) {
    reasons.push("Ukuran file terlalu besar (maks 10MB).");
  }

  // Cek jenis file
  if (!file.type.startsWith("image/")) {
    reasons.push("File bukan gambar.");
  }

  // Load image untuk analisis pixel
  const img = await loadImage(file);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = img.width;
  canvas.height = img.height;
  ctx?.drawImage(img, 0, 0);

  const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
  if (!imageData) {
    reasons.push("Gagal membaca gambar.");
    return { allowed: false, reasons };
  }

  // Analisis warna kulit dan manipulasi berlebihan
  const unnaturalSkinCount = countUnnaturalSkin(imageData);
  if (unnaturalSkinCount > 500) {
    reasons.push("Warna kulit terlihat tidak alami (seperti plastik).");
  }

  // Placeholder: Deteksi konten terlarang bisa ditambahkan dengan AI eksternal
  const bannedDetected = await fakeNSFWDetector(file);
  if (bannedDetected) {
    reasons.push("Konten terindikasi mengandung pornografi atau manipulasi tidak wajar.");
  }

  return {
    allowed: reasons.length === 0,
    reasons,
  };
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function () {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = reader.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function countUnnaturalSkin(imageData: ImageData): number {
  const data = imageData.data;
  let unnatural = 0;

  for (let i = 0; i < data.length; i += 4 * 10) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const avg = (r + g + b) / 3;
    if (
      (r > 200 && g > 160 && b > 160) || // terlalu pucat
      (r > 230 && g > 230 && b > 230) || // terlalu putih
      (r < 80 && g < 60 && b < 60)       // terlalu gelap
    ) {
      unnatural++;
    }
  }

  return unnatural;
}

// Simulasi deteksi konten terlarang
async function fakeNSFWDetector(file: File): Promise<boolean> {
  // Nanti ganti dengan API NSFW detection beneran seperti CLIP / open_nsfw / HuggingFace
  return false; // default: tidak mendeteksi
}
