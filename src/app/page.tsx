"use client";
import GlobeHero from "@/components/GlobeHero";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        <GlobeHero />
      </div>
    </main>
  );
}
