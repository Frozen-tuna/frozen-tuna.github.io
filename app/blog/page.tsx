import Link from 'next/link';
import { getPosts, Post } from '@/lib/posts';
import { Navbar } from '@/components';

export default function Blog() {
  const posts = getPosts();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-text-secondary text-lg mb-12">
            Thoughts, ideas, and things I've learned along the way.
          </p>

          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border border-border rounded-lg p-6 hover:border-highlight/50 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-semibold mb-2 hover:text-highlight transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-text-secondary mb-3">{post.excerpt}</p>
                <div className="flex gap-4 text-sm text-accent">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
