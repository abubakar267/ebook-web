'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-description">
          Get in touch with us using the form below. We&apos;d love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="contact-form mt-8">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="form-input"
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="form-input"
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="form-input"
              placeholder="Your message here..."
            />
          </div>

          <button type="submit" className="btn-primary">
            Send Message
          </button>

          {submitted && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              Thank you! Your message has been sent successfully.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
