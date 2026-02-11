"use client"
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import MainHeader from "../components/mainheader/MainHeader";
import ServicesComponent from "../components/servicescomponent/ServicesComponent";
import BookSlider from "../components/sliders/BookSlider";
import FeatureCards from "../components/featurecards/FeatureCards";
import StoryBanner from "../components/storybanner/StoryBanner";
import MarketingCard from "../components/marketingcard/MarketingCard";
import ContactCTA from "../components/contactcta/ContactCTA";
import LogoLoop from "../components/logoloop/LogoLoop";

const logos = [
  { src: "https://cdn.simpleicons.org/typescript", alt: "TypeScript", width: 50, height: 50 },
  { src: "https://cdn.simpleicons.org/amazonaws/000000", alt: "AWS", width: 50, height: 50 },
  { src: "https://cdn.simpleicons.org/react", alt: "React", width: 50, height: 50 },
  { src: "https://cdn.simpleicons.org/nextdotjs", alt: "Next.js", width: 50, height: 50 },
  { src: "https://cdn.simpleicons.org/nodedotjs", alt: "Node.js", width: 50, height: 50 },
  { src: "https://cdn.simpleicons.org/tailwindcss", alt: "Tailwind CSS", width: 50, height: 50 },
  { src: "https://cdn.simpleicons.org/postgresql", alt: "PostgreSQL", width: 50, height: 50 },
  { src: "https://cdn.simpleicons.org/docker", alt: "Docker", width: 50, height: 50 },
  { src: "https://cdn.simpleicons.org/python", alt: "Python", width: 50, height: 50 },
  { src: "https://cdn.simpleicons.org/git", alt: "Git", width: 50, height: 50 },
  { src: "https://cdn.simpleicons.org/v0", alt: "v0", width: 50, height: 50 },
  // { src: "https://cdn.simpleicons.org/openai", alt: "OpenAI", width: 50, height: 50 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Blue Hero Section Wrapper */}
        <div className="bg-lulu relative pb-[220px] pt-2">
          <div className="px-4">
            <MainHeader />
          </div>

          {/* Squiggly Divider at bottom of Hero */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] text-slate-50 fill-current">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
          </div>

          <div className="absolute bottom-0 w-full z-20 translate-y-1/2 md:translate-y-1/3 pl-30" >
            <BookSlider />
          </div>
        </div>

        {/* Content on White Background */}
        <div className="bg-slate-50 mt-30">
          <FeatureCards />


          <StoryBanner />
          <MarketingCard />

          <div className="px-4 pb-6 pt-20">
            {/* Trusted By Section */}
            <div className="py-12">
              <div className="flex items-center justify-center mb-8 max-w-4xl mx-auto">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-slate-300"></div>
                <span className="mx-6 text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase">
                  Affiliations
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-slate-300"></div>
              </div>

              <div className="w-full mx-auto overflow-hidden opacity-70 hover:opacity-100 transition-all duration-500">
                <LogoLoop
                  logos={logos}
                  speed={50}
                  direction="left"
                  gap={60}
                  logoHeight={100}
                  pauseOnHover={false}
                />
              </div>
            </div>
          </div>

          <ContactCTA />

          {/* <ServicesComponent /> */}
        </div>
      </main>


      <Footer />
    </div>
  );
}
