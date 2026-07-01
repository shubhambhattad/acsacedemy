import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { blogs } from '@/data/blogs'
import { User, Clock, Calendar, ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cn } from '@/lib/utils'

interface PageProps {
  params: Promise<{ slug: string }>
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Banking: {
    bg: 'bg-acs-blue/10 dark:bg-acs-blue/20',
    text: 'text-acs-blue dark:text-acs-blue-light',
    border: 'border-acs-blue/20 dark:border-acs-blue/30'
  },
  SSC: {
    bg: 'bg-acs-amber/10 dark:bg-acs-amber/20',
    text: 'text-acs-amber dark:text-acs-amber-light',
    border: 'border-acs-amber/20 dark:border-acs-amber/30'
  },
  MBA: {
    bg: 'bg-acs-green/10 dark:bg-acs-green/20',
    text: 'text-acs-green dark:text-acs-green-light',
    border: 'border-acs-green/20 dark:border-acs-green/30'
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogs.find((b) => b.slug === slug)

  if (!post) {
    notFound()
  }

  // Find related articles (excluding current one)
  const relatedPosts = blogs.filter((b) => b.slug !== slug).slice(0, 2)
  const colors = CATEGORY_COLORS[post.category] || { bg: 'bg-muted', text: 'text-muted-foreground', border: 'border-border/40' }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          
          {/* Back button */}
          <Link 
            href="/blog"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "mb-6 rounded-lg gap-1 flex items-center w-fit border border-border/40 hover:bg-muted"
            )}
          >
            <ArrowLeft className="size-4" />
            <span>Back to Blogs</span>
          </Link>

          {/* Article Header */}
          <article className="space-y-6">
            <div className="space-y-3">
              <span className={cn("text-xs font-bold uppercase px-3 py-1 rounded-full border tracking-wide", colors.bg, colors.text, colors.border)}>
                {post.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight pt-2">
                {post.title}
              </h1>
            </div>

            {/* Author / Date info */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground border-y border-border/40 py-3">
              <div className="flex items-center gap-1">
                <User className="size-3.5 text-primary shrink-0" />
                <span>{post.author}</span>
              </div>
              <span className="text-border">•</span>
              <div className="flex items-center gap-1">
                <Calendar className="size-3.5 text-primary shrink-0" />
                <span>{post.publishedAt}</span>
              </div>
              <span className="text-border">•</span>
              <div className="flex items-center gap-1">
                <Clock className="size-3.5 text-primary shrink-0" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Excerpt */}
            <div className="p-4 bg-acs-cream/60 rounded-xl border border-border/40 text-xs sm:text-sm font-semibold italic text-muted-foreground leading-relaxed">
              {post.excerpt}
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-sm sm:prose max-w-none text-foreground/90 space-y-6 leading-relaxed pt-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-border/40">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs text-primary font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Related Articles Section */}
          <div className="mt-16 pt-10 border-t border-border/40 space-y-6">
            <h3 className="text-lg font-bold text-foreground">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => {
                const rColors = CATEGORY_COLORS[rPost.category] || { bg: 'bg-muted', text: 'text-muted-foreground', border: 'border-border/40' }
                return (
                  <Card 
                    key={rPost.slug} 
                    className="border border-border/40 bg-card hover:border-primary/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between rounded-2xl"
                  >
                    <CardContent className="p-5 space-y-4">
                      <span className={cn("text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border tracking-wide w-fit block", rColors.bg, rColors.text, rColors.border)}>
                        {rPost.category}
                      </span>
                      <h4 className="text-sm font-bold text-foreground leading-snug pt-1">
                        <Link href={`/blog/${rPost.slug}`} className="hover:text-primary transition-colors">
                          {rPost.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {rPost.excerpt}
                      </p>
                    </CardContent>
                    <div className="border-t border-border/40 px-5 py-3 flex justify-end bg-muted/20 rounded-b-xl">
                      <Link 
                        href={`/blog/${rPost.slug}`}
                        className={cn(
                          buttonVariants({ variant: "link", size: "sm" }),
                          "text-primary hover:text-primary/80 font-bold gap-1 text-xs px-0 h-auto py-0 flex items-center"
                        )}
                      >
                        <span>Read Article</span>
                        <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Counselling Banner */}
          <Card className="mt-16 border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1.5 text-center sm:text-left">
              <h3 className="text-base font-bold text-foreground">Accelerate Your Examination Preparation</h3>
              <p className="text-xs text-muted-foreground">
                Get targeted material, regular mock papers, and expert feedback at ACS Academy Pune.
              </p>
            </div>
            <Link 
              href="/contact"
              className={cn(
                buttonVariants({ size: "sm" }),
                "bg-primary hover:bg-primary/95 text-primary-foreground font-semibold rounded-lg shrink-0 flex items-center justify-center"
              )}
            >
              Book Free Consultation
            </Link>
          </Card>

        </div>
      </main>
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }))
}
