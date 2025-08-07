
// File: App/Fitur/Restorasi/page.tsx

'use client';

import { useState } from 'react'; import Image from 'next/image'; import axios from 'axios';

export default function RestorasiPage() { const [selectedImage, setSelectedImage] = useState<File | null>(null); const [restoredImageUrl, setRestoredImageUrl] = useState<string>(''); const [isLoading, setIsLoading] = useState(false);

const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => { const file = event.target.files?.[0]; if (file) { setSelectedImage(file); } };

const handleRestore = async () => { if (!selectedImage) return; setIsLoading(true);

const formData = new FormData();
formData.append('image', selectedImage);

try {
  const response = await axios.post('/api/restorasi', formData);
  setRestoredImageUrl(response.data.output);
} catch (error) {
  console.error('Restorasi gagal:', error);
} finally {
  setIsLoading(false);
}

};

return ( <div className="p-6 max-w-3xl mx-auto"> <h1 className="text-2xl font-bold mb-4">Fitur Restorasi Foto DSRT</h1> <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />

{selectedImage && (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">Preview Gambar Asli:</h2>
      <Image
        src={URL.createObjectURL(selectedImage)}
        alt="Original"
        width={400}
        height={400}
        className="rounded shadow"
      />
    </div>
  )}

  <button
    onClick={handleRestore}
    disabled={!selectedImage || isLoading}
    className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
  >
    {isLoading ? 'Memproses...' : 'Mulai Restorasi'}
  </button>

  {restoredImageUrl && (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Hasil Restorasi:</h2>
      <Image
        src={restoredImageUrl}
        alt="Restored"
        width={400}
        height={400}
        className="rounded shadow"
      />
    </div>
  )}
</div>

); }

