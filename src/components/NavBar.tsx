"use client";

import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between text-sm text-white">
        <div className="flex items-center gap-3">
          <Link href="#hjem" className="flex items-center gap-2">
            <Image src="/img/tech2globe-logo.png" alt="Tech2Globe" width={28} height={28} className="rounded-sm" />
            <span className="font-semibold tracking-wide">Tech2Globe Norge</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#hjem" className="hover:text-neutral-300 transition-colors">Hjem</a>
          <a href="#tjenester" className="hover:text-neutral-300 transition-colors">Tjenester</a>
          <a href="#kunder" className="hover:text-neutral-300 transition-colors">Kunder</a>
          <a href="#kontakt" className="hover:text-neutral-300 transition-colors">Kontakt</a>
        </div>
        <div className="md:hidden">
          <a href="#kontakt" className="px-3 py-1.5 rounded bg-red-600 text-white hover:bg-red-500 transition-colors">Kontakt</a>
        </div>
      </nav>
    </header>
  );
}
