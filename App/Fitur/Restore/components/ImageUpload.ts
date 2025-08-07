
// App/Fitur/Restorasi/components/ImageUpload.tsx

'use client';

import { ChangeEvent } from 'react';

interface Props {
  onUpload: (file: File) => void;
}

export default function ImageUpload({ onUpload }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onUpload(file);
    } else {
      alert('Mohon unggah file gambar (.jpg, .png, dll)');
    }
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="border p-2 rounded shadow"
      />
    </div>
  );
}
