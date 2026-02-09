import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn the basics of Next.js and how to create your first project.',
    date: '2024-01-15',
  },
  {
    id: 2,
    title: 'Tailwind CSS Best Practices',
    excerpt: 'Tips and tricks for using Tailwind CSS effectively in your projects.',
    date: '2024-01-20',
  },
  {
    id: 3,
    title: 'Building Responsive Interfaces',
    excerpt: 'Create beautiful, responsive designs that work on all devices.',
    date: '2024-01-25',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="page-title">Blog</h1>
        <p className="page-description">
          Read our latest articles about web development and modern technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <article className="blog-card cursor-pointer">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <time className="text-sm text-gray-500 dark:text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
