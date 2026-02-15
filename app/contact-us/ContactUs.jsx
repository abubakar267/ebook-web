import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ContactHeader from '@/components/contactcta/ContactHeader';

const ContactUs = () => {
  return (
    <>
      <Navbar/>

      {/* Fixed Overlay */}
      <div className="absolute top-0 w-full h-[600px] bg-[#91C6BC]/60 pointer-events-none z-10"></div>

      {/* <ContactHeader/> */}

      {/* Content (Now Above Overlay) */}
      <div className="relative z-20 min-h-screen  py-12 px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#424446] mb-6">
            Get in Touch 
          </h1>
          <p className="text-[#424446] max-w-2xl mx-auto text-lg leading-relaxed">
            Have questions about our outdoor adventures or looking to plan your next thrilling getaway? 
            We're here to help! Reach out for any inquiries, rental assistance, or adventure advice.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Form */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-[#424446] mb-2">
              Have Questions? We're Just a Message Away!
            </h2>
            <p className="text-gray-500 mb-8">
              Fill out the form below, and one of our team members will get back to you shortly.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                  <input type="text" placeholder="First name" className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#4b9da9] outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                  <input type="text" placeholder="Last name" className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#4b9da9] outline-none transition" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">E-mail</label>
                <input type="email" placeholder="you@gmail.com" className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#4b9da9] outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                <input type="text" placeholder="+62 800234756" className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#4b9da9] outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                <select className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#4b9da9] outline-none transition text-gray-500 appearance-none">
                  <option>Choose message subject</option>
                  <option>General Inquiry</option>
                  <option>Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                <textarea rows="4" placeholder="Leave us a message..." className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#4b9da9] outline-none transition"></textarea>
              </div>

              <div className="flex justify-end">
                <button className="bg-[#4b9da9] hover:bg-[#3d7f8a] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
                  Send Message <ArrowUpRight size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Info Cards */}
          <div className="space-y-6">
            
            {/* Banner Card */}
            <div className="relative overflow-hidden bg-[#4b9da9] rounded-3xl p-8 text-white h-80 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white/20 p-1.5 rounded-lg">
                  <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
                <span className="font-bold tracking-wide uppercase text-sm">Thrilliz</span>
              </div>

              <h3 className="text-4xl font-bold leading-tight max-w-[250px]">
                Our experts will always help you
              </h3>
              
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400" 
                alt="Expert" 
                className="absolute right-0 bottom-0 h-[90%] object-contain mix-blend-luminosity opacity-80"
              />

              <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <svg width="100%" height="100%">
                  <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 40L40 0M-10 10L10-10M30 50L50 30" stroke="white" strokeWidth="1"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#pattern)" />
                </svg>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white p-6 rounded-3xl space-y-4 shadow-sm border border-gray-100">
              <ContactInfoItem icon={<Mail className="text-[#4b9da9]" size={20} />} label="Email" value="support@thrilliz.com" />
              <ContactInfoItem icon={<Phone className="text-[#4b9da9]" size={20} />} label="Call" value="+1 (800) 555-1234" />
              <ContactInfoItem icon={<MapPin className="text-[#4b9da9]" size={20} />} label="Address" value="123 Adventure Lane, Suite 100, Boulder, CO 80301" />
              <ContactInfoItem icon={<Clock className="text-[#4b9da9]" size={20} />} label="Working Hours" value="Mon-Fri: 9:00 AM - 6:00 PM (PST)" />
            </div>

          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

const ContactInfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 p-4 bg-[#E6F3EF]/40 rounded-2xl transition hover:bg-[#D1EAE2]">
    <div className="bg-white p-3 rounded-full shadow-sm">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</p>
      <p className="text-[#4b9da9] font-medium">{value}</p>
    </div>
  </div>
);

export default ContactUs;
