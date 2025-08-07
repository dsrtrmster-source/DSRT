/*
App/Fitur/Restorasi/components/RestoreButton.tsx
*/
import { restoreImage } from '../lib/replicate';
import { validateImage } from '../utils/validator';

export default function RestoreButton({ image, onRestore, setIsLoading }: { image: string; onRestore: (img: string) => void; setIsLoading: (v: boolean) => void }) {
  const handleClick = async () => {
    const isValid = await validateImage(image);
    if (!isValid) return alert('Gambar tidak valid atau melanggar ketentuan restorasi.');

    setIsLoading(true);
    const restored = await restoreImage(image);
    onRestore(restored);
    setIsLoading(false);
  };

  return (
    <button onClick={handleClick} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Proses Restorasi
    </button>
  );
}
