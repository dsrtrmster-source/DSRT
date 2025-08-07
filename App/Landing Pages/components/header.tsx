"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-black bg-opacity-50">
      {/* Logo Kiri */}
      <div className="flex items-center space-x-3">
        <Image
          src="https://lodqquddikomudtyemwh.supabase.co/storage/v1/object/sign/dsrt-assets/file_0000000073c061f7922490cd14178abc.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzU2NThkNC1mMjJiLTQxZDItYjQ0ZS0zODNiNjkxMGVlNWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkc3J0LWFzc2V0cy9maWxlXzAwMDAwMDAwNzNjMDYxZjc5MjI0OTBjZDE0MTc4YWJjLnBuZyIsImlhdCI6MTc1NDU5NDIyMywiZXhwIjoxNzU3MTg2MjIzfQ.z8290j-gT82DL4RDgv6MyB4NBPEx-r2yqRMgCnivXaU"
          alt="DSRT Logo"
          width={40}
          height={40}
        />
        <span className="text-white font-bold text-lg tracking-wide">
          DSRT
        </span>
      </div>

      {/* Tombol Login */}
      <Link
        href="/auth/login"
        className="text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md font-medium transition duration-200"
      >
        Login
      </Link>
    </header>
  );
}
