
/index.tsx "use client";

import { useState } from "react"; import Header from "../components/Header"; import HeroSection from "../components/HeroSection"; import ImageUpload from "../components/ImageUpload"; import RestoreButton from "../components/RestoreButton"; import ComparisonSlider from "../components/ComparisonSlider";

export default function LandingPage() { const [originalImage, setOriginalImage] = useState<string | null>(null); const [restoredImage, setRestoredImage] = useState<string | null>(null); const [loading, setLoading] = useState(false);

return ( <main className="min-h-screen bg-cover bg-center px-4" style={{ backgroundImage: "url('https://lodqquddikomudtyemwh.supabase.co/storage/v1/object/sign/dsrt-assets/images%20(8).jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzU2NThkNC1mMjJiLTQxZDItYjQ0ZS0zODNiNjkxMGVlNWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkc3J0LWFzc2V0cy9pbWFnZXMgKDgpLmpwZWciLCJpYXQiOjE3NTQ1OTQyNDUsImV4cCI6MTc1NTE5OTA0NX0.5vAc2Givfo3fNoKtPlmCW6B6nOA9eipKlbAd6qVML84')", }} > <Header /> <HeroSection />

<section className="mt-12 flex flex-col items-center justify-center">
    <ImageUpload setImage={setOriginalImage} />
    <RestoreButton
      originalImage={originalImage}
      setRestoredImage={setRestoredImage}
      setLoading={setLoading}
    />

    {loading && <p className="mt-4 text-white">Memproses gambar...</p>}

    {originalImage && restoredImage && !loading && (
      <div className="mt-8 w-full max-w-4xl">
        <ComparisonSlider
          original={originalImage}
          restored={restoredImage}
          watermarkUrl="https://lodqquddikomudtyemwh.supabase.co/storage/v1/object/sign/dsrt-assets/file_00000000b41061f796a38f3d9fb3a9ae.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzU2NThkNC1mMjJiLTQxZDItYjQ0ZS0zODNiNjkxMGVlNWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkc3J0LWFzc2V0cy9maWxlXzAwMDAwMDAwYjQxMDYxZjc5NmEzOGYzZDlmYjNhOWFlLnBuZyIsImlhdCI6MTc1NDU5NDI2NiwiZXhwIjoxNzU3MTg2MjY2fQ.w8JGjK4kgDSs0Qof-aF6TXhqdP8lPY1A37MVl96Rdis"
        />
      </div>
    )}
  </section>
</main>

); }

