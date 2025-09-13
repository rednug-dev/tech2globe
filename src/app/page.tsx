"use client";
import GlobeHero from "@/components/GlobeHero";
import ServicesNO from "@/components/ServicesNO";

export default function Page() {
  return (
    <main id="hjem" className="min-h-screen bg-black text-white">
      <section className="px-4 md:px-6 mx-auto max-w-6xl py-6">
        <GlobeHero />
      </section>
      <ServicesNO />
    </main>
  );
}
