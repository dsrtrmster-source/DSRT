// File: App/Landing/pages/index.tsx

import Image from "next/image"; import Header from "../components/Header"; import HeroSection from "../components/HeroSection";

export default function LandingPage() { return ( <div className="min-h-screen w-full relative"> <div className="absolute inset-0 -z-10"> <Image
src="https://lodqquddikomudtyemwh.supabase.co/storage/v1/object/sign/dsrt-assets/images%20(8).jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzU2NThkNC1mMjJiLTQxZDItYjQ0ZS0zODNiNjkxMGVlNWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkc3J0LWFzc2V0cy9pbWFnZXMgKDgpLmpwZWciLCJpYXQiOjE3NTQ1OTQyNDUsImV4cCI6MTc1NTE5OTA0NX0.5vAc2Givfo3fNoKtPlmCW6B6nOA9eipKlbAd6qVML84"
alt="Wallpaper"
layout="fill"
objectFit="cover"
/> <div className="absolute inset-0 bg-black opacity-60" /> </div> <Header /> <main className="flex flex-col justify-center items-center text-white text-center py-32 px-4"> <HeroSection /> </main> </div> ); }

