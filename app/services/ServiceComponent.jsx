"use client"
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ServicesScroller from "@/components/servicescomponent/ServiceScroller";
import ServicesHero from "@/components/servicescomponent/ServicesHero";
import PromoBanner from "@/components/storybanner/PromoBanner";
import HeroService from "@/components/servicescomponent/HeroService";



export default function ServiceComponent() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <HeroService/>
        <ServicesScroller/>
        <ServicesHero/>
        <PromoBanner/>
      </main>


      <Footer />
    </div>
  );
}
