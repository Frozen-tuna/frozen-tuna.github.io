import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPosts, getPostBySlug } from '@/lib/posts';
import Navbar from '@/components/Navbar';

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: `${post.title} | Garrick Friedlander`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <article className="pt-24 px-6 pb-12">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex gap-4 text-text-secondary">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-foreground prose-p:text-text-secondary
              prose-a:text-highlight prose-a:no-underline hover:prose-a:underline
              prose-code:text-highlight prose-code:bg-card-bg prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-card-bg prose-pre:border prose-pre:border-border"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}
