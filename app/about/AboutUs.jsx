import React from 'react';
import AboutUsHeader from '../../components/AboutUsHeader';
import Navbar from '@/components/navbar/Navbar';
import CardSection from '@/components/CardSection';
import ServicesSection from '@/components/ServiceSection';
import Footer from '@/components/footer/Footer';
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#ebe7dd]">
        <Navbar/>

        <div className='mt-10 md:mt-0'>
        <AboutUsHeader />
        </div>
        <div className="mt-12 md:mt-16">
          <CardSection/>
        </div>
        <ServicesSection/>
        <Footer/>
    </div>
  );
}
