// App/Fitur/Restorasi/pages/index.tsx

"use client";

import { useState } from "react"; import ImageUpload from "../components/ImageUpload"; import RestoreButton from "../components/RestoreButton"; import ComparisonSlider from "../components/ComparisonSlider"; import Header from "../components/Header";

export default function LandingRestorePage() { const [originalImage, setOriginalImage] = useState<string | null>(null); const [restoredImage, setRestoredImage] = useState<string | null>(null); const [loading, setLoading] = useState(false);

const handleRestore = async () => { if (!originalImage) return; setLoading(true); try { const response = await fetch("/api/restore", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ image: originalImage }), });

const data = await response.json();
  setRestoredImage(data.restored);
} catch (err) {
  console.error("Restore failed", err);
} finally {
  setLoading(false);
}

};

return ( <main className="min-h-screen bg-cover bg-center px-4 py-6" style={{ backgroundImage: "url('https://lodqquddikomudtyemwh.supabase.co/storage/v1/object/sign/dsrt-assets/images%20(8).jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzU2NThkNC1mMjJiLTQxZDItYjQ0ZS0zODNiNjkxMGVlNWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkc3J0LWFzc2V0cy9pbWFnZXMgKDgpLmpwZWciLCJpYXQiOjE3NTQ1OTQyNDUsImV4cCI6MTc1NTE5OTA0NX0.5vAc2Givfo3fNoKtPlmCW6B6nOA9eipKlbAd6qVML84')", }} > <Header />

<div className="max-w-4xl mx-auto mt-10 bg-white bg-opacity-70 p-6 rounded-xl shadow-md">
    <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
      DSRT (Digital Smart Revise Technology)
    </h1>

    <ImageUpload onImageUpload={setOriginalImage} />

    <div className="flex justify-center mt-4">
      <RestoreButton disabled={!originalImage || loading} onClick={handleRestore} loading={loading} />
    </div>

    {originalImage && restoredImage && (
      <div className="mt-10">
        <ComparisonSlider
          original={originalImage}
          restored={restoredImage}
          watermarkUrl="https://lodqquddikomudtyemwh.supabase.co/storage/v1/object/sign/dsrt-assets/file_00000000b41061f796a38f3d9fb3a9ae.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzU2NThkNC1mMjJiLTQxZDItYjQ0ZS0zODNiNjkxMGVlNWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkc3J0LWFzc2V0cy9maWxlXzAwMDAwMDAwYjQxMDYxZjc5NmEzOGYzZDlmYjNhOWFlLnBuZyIsImlhdCI6MTc1NDU5NDI2NiwiZXhwIjoxNzU3MTg2MjY2fQ.w8JGjK4kgDSs0Qof-aF6TXhqdP8lPY1A37MVl96Rdis"
        />
      </div>
    )}
  </div>
</main>

); }

