// App/Fitur/Restorasi/components/ComparisonSlider.tsx

'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  originalFile: File;
  restoredUrl: string;
}

export default function ComparisonSlider({ originalFile, restoredUrl }: Props) {
  const [originalUrl, setOriginalUrl] = useState<string>('');

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => setOriginalUrl(reader.result as string);
    reader.readAsDataURL(originalFile);
  }, [originalFile]);

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-4">
      <div className="flex gap-4 justify-center">
        <div className="text-center">
          <p className="mb-1 font-semibold">Asli</p>
          <img src={originalUrl} alt="Original" className="rounded shadow max-h-80" />
        </div>
        <div className="text-center">
          <p className="mb-1 font-semibold">Restorasi</p>
          <img src={restoredUrl} alt="Restored" className="rounded shadow max-h-80" />
        </div>
      </div>
    </div>
  );
}
