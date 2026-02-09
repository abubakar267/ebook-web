import Link from 'next/link';

const blogContent = {
  '1': {
    title: 'Getting Started with Next.js',
    content: `Next.js is a powerful React framework that makes it easy to build 
    server-side rendered and static web applications. In this guide, we'll explore the 
    basics and get you started with your first Next.js project.
    
    Key features of Next.js include:
    - File-based routing with the App Router
    - Automatic code splitting and optimization
    - Built-in CSS and image optimization
    - API routes for serverless functions
    
    Whether you're building a simple blog or a complex web application, Next.js provides 
    the tools and features you need to succeed.`,
  },
  '2': {
    title: 'Tailwind CSS Best Practices',
    content: `Tailwind CSS is a utility-first CSS framework that helps you build 
    beautiful designs without leaving your HTML. Here are some best practices for 
    using Tailwind effectively:
    
    - Use the configuration file to customize colors and spacing
    - Combine utilities to avoid repetition
    - Use component classes for frequently used patterns
    - Take advantage of responsive prefixes for mobile-first design
    
    By following these practices, you can write cleaner, more maintainable CSS.`,
  },
  '3': {
    title: 'Building Responsive Interfaces',
    content: `Creating responsive interfaces is essential in modern web development. 
    With Tailwind CSS and Next.js, you have all the tools you need to build interfaces 
    that work beautifully on all devices.
    
    Key principles:
    - Design mobile-first and scale up
    - Use Tailwind's responsive breakpoints
    - Test on real devices
    - Optimize images and performance
    
    By following these principles, your users will have a great experience regardless 
    of the device they're using.`,
  },
};

export default function BlogDetail({ params }) {
  const post = blogContent[params.id];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="page-title">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          ← Back to Blog
        </Link>
        
        <article className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h1 className="page-title mb-4">{post.title}</h1>
          
          <div className="prose prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
