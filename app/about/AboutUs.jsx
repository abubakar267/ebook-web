import React from 'react';
import AboutUsHeader from '../../components/AboutUsHeader';
import Navbar from '@/components/navbar/Navbar';
import CardSection from '@/components/CardSection';
import ServicesSection from '@/components/ServiceSection';
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-50">
        <Navbar/>
        <AboutUsHeader />
        <div className="mt-12 md:mt-16">
          <CardSection/>
        </div>
        <ServicesSection/>
    </div>
  );
}
