// App/Fitur/Restorasi/components/RestoreButton.tsx

'use client';

import { useState } from 'react';
import { restoreImage } from '../lib/replicate';
import { validateImage } from '../utils/validator';
import { detectDamageLevel } from '../lib/damageDetection';

interface Props {
  file: File;
  onComplete: (url: string, damage: string) => void;
}

export default function RestoreButton({ file, onComplete }: Props) {
  const [loading, setLoading] = useState(false);

  const handleRestore = async () => {
    setLoading(true);

    try {
      const isValid = await validateImage(file);
      if (!isValid) {
        alert('Gambar melanggar pedoman DSRT (konten tidak diperbolehkan)');
        setLoading(false);
        return;
      }

      const damageLevel = await detectDamageLevel(file);

      const restoredUrl = await restoreImage(file);
      onComplete(restoredUrl, damageLevel);
    } catch (err) {
      console.error(err);
      alert('Gagal memproses restorasi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleRestore}
      disabled={loading}
      className={`mt-4 px-4 py-2 rounded text-white ${
        loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
      }`}
    >
      {loading ? 'Memproses...' : 'Proses Restorasi'}
    </button>
  );
}
