"use client";

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`bg-white rounded-xl mb-4 shadow-sm transition-all duration-300 border ${
        isOpen ? 'shadow-md ring-1 ring-purple-100' : 'hover:shadow-md'
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
    { question: "How long until we deliver your first blog post?", answer: "Answer: The first 1-4 drafts of designs are delivered within 3-5 business days after your revision." },
    { question: "How long until we deliver your first blog post?", answer: "Answer: The first 1-4 drafts of designs are delivered within 3-5 business days after your revision." },
    { question: "How long until we deliver your first blog post?", answer: "Answer: The first 1-4 drafts of designs are delivered within 3-5 business days after your revision." },
    { question: "How long until we deliver your first blog post?", answer: "Answer: The first 1-4 drafts of designs are delivered within 3-5 business days after your revision." },
    { question: "How long until we deliver your first blog post?", answer: "Answer: The first 1-4 drafts of designs are delivered within 3-5 business days after your revision." },
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