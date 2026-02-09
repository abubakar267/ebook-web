import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Welcome to Your Next.js App
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            This Next.js project demonstrates multiple pages with Tailwind CSS and custom CSS styling.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-12">
            <Link href="/about" className="feature-card cursor-pointer hover:scale-105 transition-transform">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">About</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Learn more about our project and approach
              </p>
            </Link>

            <Link href="/blog" className="feature-card cursor-pointer hover:scale-105 transition-transform">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">Blog</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Read our latest articles and updates
              </p>
            </Link>

            <Link href="/contact" className="feature-card cursor-pointer hover:scale-105 transition-transform">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">Contact</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Get in touch with us directly
              </p>
            </Link>

            <div className="feature-card">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">Tech Stack</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Next.js • React • Tailwind CSS • JavaScript
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-slate-800 rounded-lg p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              🎨 Styling Features
            </h3>
            <ul className="text-left space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Tailwind CSS for utility-first styling</li>
              <li>✓ Global CSS file with custom classes</li>
              <li>✓ Dark mode support</li>
              <li>✓ Responsive design across all pages</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
