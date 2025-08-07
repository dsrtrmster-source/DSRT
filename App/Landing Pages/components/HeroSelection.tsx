"use client";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 text-white bg-black bg-opacity-40 backdrop-blur-sm min-h-[70vh]">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Digital Smart Revise Technology
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8">
        Platform restorasi foto cerdas yang mempertahankan keaslian wajah,
        pose, warna, dan detail penting dengan teknologi konservatif berbasis AI.
      </p>
      <a
        href="/fitur/restorasi"
        className="bg-white text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200 transition"
      >
        Coba Restorasi Sekarang
      </a>
    </section>
  );
}
