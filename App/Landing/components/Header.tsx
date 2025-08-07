
// App/landing/components/Header.tsx

"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black/50 backdrop-blur-sm">
      <div className="flex items-center space-x-3">
        <Image
          src="https://lodqquddikomudtyemwh.supabase.co/storage/v1/object/sign/dsrt-assets/file_0000000073c061f7922490cd14178abc.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzU2NThkNC1mMjJiLTQxZDItYjQ0ZS0zODNiNjkxMGVlNWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkc3J0LWFzc2V0cy9maWxlXzAwMDAwMDAwNzNjMDYxZjc5MjI0OTBjZDE0MTc4YWJjLnBuZyIsImlhdCI6MTc1NDU5NDIyMywiZXhwIjoxNzU3MTg2MjIzfQ.z8290j-gT82DL4RDgv6MyB4NBPEx-r2yqRMgCnivXaU"
          alt="DSRT Logo"
          width={40}
          height={40}
        />
        <h1 className="text-white text-xl font-semibold tracking-wide">DSRT</h1>
      </div>

      <Link
        href="/auth"
        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition"
      >
        Login
      </Link>
    </header>
  );
}
