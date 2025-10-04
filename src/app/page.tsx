"use client";

import dynamic from "next/dynamic";
import GlobeHero from "../components/GlobeHero";

const InfoSection = dynamic(() => import("../components/InfoSection"), {
  ssr: false,
  loading: () => (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="h-32 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
    </section>
  ),
});

const ServicesSection = dynamic(() => import("../components/ServicesSection"), {
  ssr: false,
  loading: () => (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="h-32 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
    </section>
  ),
});

const ContactSection = dynamic(() => import("../components/ContactSection"), {
  ssr: false,
  loading: () => (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="h-32 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
    </section>
  ),
});

const GetStartedSection = dynamic(() => import("../components/GetStartedSection"), {
  ssr: false,
  loading: () => (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="h-20 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
    </section>
  ),
});

export default function Page() {
  return (
    <>
      <main className="min-h-screen">
        <section id="hero" className="w-full max-w-6xl mx-auto px-4">
          <GlobeHero />
        </section>
        <InfoSection />
        <ServicesSection />
        <ContactSection />
        <GetStartedSection />
      </main>
    </>
  );
}