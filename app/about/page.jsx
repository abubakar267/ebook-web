export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="page-title">About Us</h1>
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
        <p className="page-description">
          Welcome to our Next.js application. This page demonstrates a custom styled component using both Tailwind CSS and regular CSS.
        </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="feature-card">
            <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100">Modern Technology</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Built with Next.js, React, and Tailwind CSS for a fast and responsive experience.
            </p>
          </div>
          
          <div className="feature-card">
            <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100">Styling Flexibility</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Combines Tailwind CSS utility classes with custom CSS for complete design control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
