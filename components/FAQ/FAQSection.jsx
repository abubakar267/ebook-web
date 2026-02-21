"use client";

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl mb-4 shadow-sm transition-all duration-300 border ${isOpen ? 'shadow-md ring-1 ring-purple-100' : 'hover:shadow-md'
        }`}
      style={{ borderColor: '#91C6BC' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="text-slate-400">
            <Plus size={20} />
          </div>
          <span className="font-bold text-slate-800 text-base md:text-lg">
            {question}
          </span>
        </div>

      </button>

      {isOpen && (
        <div className="px-14 pb-5 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="text-slate-500 text-sm leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default function FAQComponent() {
  const faqs = [
    { question: "How much time does it take to publish my book?", answer: "The timeline depends on your manuscript's stage and your specific needs. Typically, the process takes about 6 weeks, but it can be shorter or longer depending on editing, design, and marketing requirements." },
    { question: "Do I remain in control of my book?", answer: "Yes. This is your story. We collaborate and advise, but the final decisions are always yours. If you need guidance, we teach and guide you, but you remain in charge." },
    { question: "Can I aim for traditional publishing through Evercrest?", answer: "Yes. We prepare manuscripts to meet the standards needed for traditional publishing. That means refining structure, editing carefully, and positioning your book to compete in the market." },
    { question: "Who will I work with during the process?", answer: "You'll have a dedicated, genre-specific team for every stage: editors, designers, marketing strategists, and support staff. Each expert helps your book reach its full potential while keeping you informed every step of the way." },
    { question: "How much does it cost to publish my book?", answer: "Costs vary depending on services, manuscript length, and your goals. We provide transparent pricing and can create a custom package tailored to your needs." },
    { question: "Do I have to be in a specific location to work with you?", answer: "Not at all. We work with authors worldwide, offering online consultations, file sharing, and support at every stage." },
    { question: "Can you help me pitch my book to traditional publishers or production houses?", answer: "Yes. We guide authors who aim for traditional routes, helping refine manuscripts, prepare proposals, and connect with appropriate channels." },
    { question: "What makes Evercrest different from other publishing services?", answer: "Unlike standard providers, we collaborate with authors at every stage, accept manuscripts at any level, assign genre-specific teams, and customize strategies for editing, design, marketing, and distribution." },
  ];

  return (
    <section className="min-h-screen bg-[#FDFBFF] py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center text-slate-800 mb-20">
          Frequently Ask Questions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Accordion */}
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQCard key={index} {...faq} />
            ))}
          </div>

          {/* Right Column: Interaction/Form */}
          <div className="hidden lg:flex flex-col items-center text-center space-y-6 lg:pt-2">
            {/* The "Blob" with Question Mark */}
            <div className="relative w-100 h-100 flex items-center justify-center">
              <img
                src="/FAQ-IMAGE.png"
                alt="Decorative Blob"
                className="w-full h-full object-cover object-center"
              />
              <span className="relative z-10 text-7xl font-bold text-white">?</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-4xl font-black text-slate-800">Any Question?</h3>
              <p className="text-slate-600 font-medium">You can ask anything you want to know Feedback</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}