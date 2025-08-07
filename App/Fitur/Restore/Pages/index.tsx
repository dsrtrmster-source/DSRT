/*
App/Fitur/Restorasi/pages/index.tsx
*/
import ImageUpload from '../components/ImageUpload';
import ComparisonSlider from '../components/ComparisonSlider';
import RestoreButton from '../components/RestoreButton';
import { useState } from 'react';

export default function RestorasiPage() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [restoredImage, setRestoredImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Restorasi Foto DSRT</h1>
      <ImageUpload onImageUpload={setOriginalImage} />
      {originalImage && (
        <RestoreButton
          image={originalImage}
          onRestore={(img) => setRestoredImage(img)}
          setIsLoading={setIsLoading}
        />
      )}
      {isLoading && <p className="text-center mt-4">Memproses...</p>}
      {restoredImage && originalImage && (
        <ComparisonSlider original={originalImage} restored={restoredImage} />
      )}
    </div>
  );
}
App/Fitur/Restorasi/pages/index.tsx
*/
import ImageUpload from '../components/ImageUpload';
import ComparisonSlider from '../components/ComparisonSlider';
import RestoreButton from '../components/RestoreButton';
import { useState } from 'react';

export default function RestorasiPage() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [restoredImage, setRestoredImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Restorasi Foto DSRT</h1>
      <ImageUpload onImageUpload={setOriginalImage} />
      {originalImage && (
        <RestoreButton
          image={originalImage}
          onRestore={(img) => setRestoredImage(img)}
          setIsLoading={setIsLoading}
        />
      )}
      {isLoading && <p className="text-center mt-4">Memproses...</p>}
      {restoredImage && originalImage && (
        <ComparisonSlider original={originalImage} restored={restoredImage} />
      )}
    </div>
  );
}
