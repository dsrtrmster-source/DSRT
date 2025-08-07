// App/Fitur/Restorasi/pages/index.tsx

'use client';

import { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import ComparisonSlider from '../components/ComparisonSlider';
import RestoreButton from '../components/RestoreButton';

export default function RestorasiPage() {
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [restoredImage, setRestoredImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [damageLevel, setDamageLevel] = useState<'ringan' | 'sedang' | 'berat' | null>(null);

  const handleImageUpload = (file: File) => {
    setOriginalImage(file);
    setRestoredImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Restorasi Foto Rusak DSRT</h1>
      <ImageUpload onUpload={handleImageUpload} />
      {originalImage && (
        <RestoreButton
          originalImage={originalImage}
          setRestoredImage={setRestoredImage}
          setLoading={setLoading}
          setDamageLevel={setDamageLevel}
        />
      )}
      {loading && <p className="text-center mt-4">Memproses gambar...</p>}
      {restoredImage && originalImage && (
        <>
          <h2 className="text-xl mt-6 font-semibold text-center">Perbandingan Hasil</h2>
          <ComparisonSlider originalFile={originalImage} restoredUrl={restoredImage} />
          <p className="text-center mt-2 text-sm text-gray-600">Kerusakan: {damageLevel}</p>
        </>
      )}
    </div>
  );
}
