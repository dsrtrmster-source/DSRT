import { useState } from 'react'; import Image from 'next/image'; import { restoreImage } from '../lib/replicate'; import { analyzeImage } from '../utils/analyzeImage'; import ImageCompare from '../components/ImageCompare';

export default function RestorePage() { const [originalImage, setOriginalImage] = useState(null); const [restoredImage, setRestoredImage] = useState(null); const [uploading, setUploading] = useState(false); const [status, setStatus] = useState('');

const handleImageUpload = async (e) => { const file = e.target.files[0]; if (!file) return; setUploading(true); setStatus('Menganalisis kerusakan gambar...');

const base64 = await toBase64(file);
setOriginalImage(base64);

const damageLevel = await analyzeImage(base64);
setStatus(`Tingkat kerusakan: ${damageLevel}`);

setStatus('Memproses restorasi gambar...');
const result = await restoreImage(base64);
setRestoredImage(result);

setUploading(false);
setStatus('Selesai.');

};

return ( <div className="p-6 max-w-4xl mx-auto"> <h1 className="text-2xl font-bold mb-4">Fitur Restorasi DSRT</h1>

<input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="mb-4"
    disabled={uploading}
  />

  {status && <p className="text-sm text-gray-600 mb-2">{status}</p>}

  {originalImage && restoredImage && (
    <ImageCompare
      original={originalImage}
      restored={restoredImage}
    />
  )}
</div>

); }

function toBase64(file) { return new Promise((resolve, reject) => { const reader = new FileReader(); reader.readAsDataURL(file); reader.onload = () => resolve(reader.result); reader.onerror = (error) => reject(error); }); }


