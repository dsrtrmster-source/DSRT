/ App/HeroSection.tsx

"use client";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center text-white px-6 py-32 bg-black/40 backdrop-blur-sm">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
        Digital Smart Revise Technology
      </h2>
      <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md">
        Platform restorasi AI konservatif untuk memulihkan foto bersejarah dan rusak tanpa kehilangan keaslian.
      </p>
      <a
        href="/fitur/restorasi"
        className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Mulai Restorasi
      </a>
    </section>
  );
}
