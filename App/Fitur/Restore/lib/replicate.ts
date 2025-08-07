/*
App/Fitur/Restorasi/lib/replicate.ts
*/
export async function restoreImage(base64Image: string): Promise<string> {
  const response = await fetch('/api/restore', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image: base64Image })
  });

  const data = await response.json();
  return data.restored;
}
