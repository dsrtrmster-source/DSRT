// App/Fitur/Restorasi/lib/replicate.ts

import axios from 'axios';

const REPLICATE_API_TOKEN = process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN;
const REPLICATE_MODEL = 'real-esrgan/Real-ESRGAN';
const REPLICATE_VERSION = 'v1.3.1'; // Ganti jika pakai versi lain

export async function restoreImage(file: File): Promise<string> {
  const base64 = await toBase64(file);

  const response = await axios.post(
    'https://api.replicate.com/v1/predictions',
    {
      version: REPLICATE_VERSION,
      input: {
        image: base64,
        scale: 2,
        face_enhance: true
      },
      model: REPLICATE_MODEL,
    },
    {
      headers: {
        'Authorization': `Token ${REPLICATE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  );

  const prediction = response.data;
  const predictionId = prediction.id;

  // Polling until finished
  let restoredUrl = '';
  while (!['succeeded', 'failed', 'canceled'].includes(prediction.status)) {
    const poll = await axios.get(
      `https://api.replicate.com/v1/predictions/${predictionId}`,
      {
        headers: {
          'Authorization': `Token ${REPLICATE_API_TOKEN}`,
        },
      }
    );
    if (poll.data.status === 'succeeded') {
      restoredUrl = poll.data.output;
      break;
    } else if (poll.data.status === 'failed') {
      throw new Error('Restorasi gagal.');
    }

    await new Promise((r) => setTimeout(r, 2000)); // delay polling
  }

  return restoredUrl;
}

async function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
                      }
