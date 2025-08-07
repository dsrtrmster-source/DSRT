// App/landing/pages/index.tsx

"use client";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

export default function LandingPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://lodqquddikomudtyemwh.supabase.co/storage/v1/object/sign/dsrt-assets/images%20(8).jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzU2NThkNC1mMjJiLTQxZDItYjQ0ZS0zODNiNjkxMGVlNWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkc3J0LWFzc2V0cy9pbWFnZXMgKDgpLmpwZWciLCJpYXQiOjE3NTQ1OTQyNDUsImV4cCI6MTc1NTE5OTA0NX0.5vAc2Givfo3fNoKtPlmCW6B6nOA9eipKlbAd6qVML84')",
      }}
    >
      <Header />
      <HeroSection />
    </main>
  );
}
