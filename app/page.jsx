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
import FooterCTA from "../components/footercta/FooterCTA";
import ExpandingCards from "../components/expandingcards/ExpandingCards";
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
        <div className="bg-slate-50 relative pb-1">
          <div className="mx-4 sm:mr-0">
            <MainHeader />
          </div>
        </div>
        <ExpandingCards />

        {/* <ExpandingCards /> */}

        {/* Content on White Background */}

        <div>
          <div className="w-full bg-slate-50 pb-38 pt-0 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900">
                <span className="inline-block bg-[#4B9DA9] text-white px-2 py-1 rotate-[-2deg] mr-2 rounded-md">
                  A Record
                </span>
                 of Thoughtful Work
                <span className="inline-block bg-[#E37434] text-white px-2 py-1 rotate-[1deg] ml-2 rounded-md">
                  Work
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 mt-0">
          <FeatureCards />


          <StoryBanner />
          <MarketingCard />

          <div className="px-4 pb-12 pt-12 bg-slate-50">
            {/* Publishing Partners Section */}
            <div className="py-8">


              <div className="w-full mt-2 mx-auto overflow-hidden">

                <LogoLoop
                  logos={[
                    { name: "Barnes & Noble", src: "/logos/barnes.png" },
                    { name: "Amazon Kindle", src: "/logos/amazon.png" },
                    { name: "Google Books", src: "/logos/google.png" },
                    { name: "Rakuten Kobo", src: "/logos/RK.png" },
                    { name: "Wattpad", src: "/logos/W.png" },
                    { name: "Books A Million", src: "/logos/BAK.svg" },
                    { name: "Apple Books", src: "/logos/apple.png" },
                  ]}
                  speed={30}
                  direction="left"
                  gap={20}
                  logoHeight={140}
                  renderItem={(item) => (
                    <div className="flex items-center justify-center px-8 py-4 border border-slate-800 rounded-full bg-transparent mix-blend-multiply transition-all hover:bg-slate-50">
                      {/* Force logos to be black */}
                      <img
                        src={item.src}
                        alt={item.name}
                        className="h-20 md:h-20 w-auto object-contain brightness-0 opacity-80"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <span className="hidden text-xl font-bold text-slate-900">{item.name}</span>
                    </div>
                  )}
                  pauseOnHover={true}
                />
              </div>
            </div>
          </div>



          {/* <ContactCTA /> */}
          <FooterCTA />


          {/* <ServicesComponent /> */}
        </div>
      </main>


      <Footer />
    </div>
  );
}
