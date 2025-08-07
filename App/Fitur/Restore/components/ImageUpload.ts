
/*
App/Fitur/Restorasi/components/ImageUpload.tsx
*/
import { ChangeEvent } from 'react';

export default function ImageUpload({ onImageUpload }: { onImageUpload: (base64: string) => void }) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result && typeof reader.result === 'string') {
        onImageUpload(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-4">
      <input type="file" accept="image/*" onChange={handleChange} />
    </div>
  );
}
