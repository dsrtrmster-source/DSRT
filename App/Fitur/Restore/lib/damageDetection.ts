/*
App/Fitur/Restorasi/lib/damageDetection.ts
*/
export function detectDamageLevel(imageData: string): 'ringan' | 'sedang' | 'berat' {
  // Sementara dummy logic
  const rand = Math.random();
  if (rand < 0.4) return 'ringan';
  if (rand < 0.8) return 'sedang';
  return 'berat';
}

/*
App/Fitur/Restorasi/utils/validator.ts
*/
const bannedKeywords = ['porn', 'nude', 'explicit'];

export async function validateImage(image: string): Promise<boolean> {
  // Dummy larangan berbasis keyword base64 (real implementation pakai AI/moderation API)
  return !bannedKeywords.some((kw) => image.includes(kw));
}
