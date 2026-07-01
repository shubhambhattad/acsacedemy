'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { blogs } from '@/data/blogs'
import { Button } from '@/components/ui/button'
import { Clock, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function BlogListPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const categories = ['All', 'Banking', 'SSC', 'MBA']
  
  const filteredBlogs = activeCategory === 'All' 
    ? blogs 
    : blogs.filter(b => b.category === activeCategory)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background py-12">
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6 mb-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              Knowledge Hub
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
              Latest from Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Expert tips, preparation strategies, syllabus updates, and current affairs curated by senior faculty at ACS Academy.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="container mx-auto px-4 sm:px-6 mb-8 flex justify-center gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'default' : 'outline'}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-1 text-xs font-bold ${
                activeCategory === cat 
                  ? 'bg-primary text-primary-foreground' 
                  : 'border-border text-muted-foreground hover:bg-muted'
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Blogs Grid */}
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => (
              <Card 
                key={post.slug} 
                className="border border-border/80 bg-card hover:border-primary/30 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div className="p-4 bg-muted/40 border-b border-border/40 shrink-0 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-semibold">
                    <Clock className="size-3 text-primary" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-base font-bold text-foreground leading-snug hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>

                <CardContent className="py-2">
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>

                <CardFooter className="border-t border-border/40 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-semibold">
                    <Calendar className="size-3 text-primary" />
                    <span>{post.publishedAt}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className={cn(
                      buttonVariants({ variant: "link", size: "sm" }),
                      "text-primary hover:text-primary/80 font-bold gap-1 text-xs px-0 flex items-center h-auto py-0"
                    )}
                  >
                    <span>Read More</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="container mx-auto px-4 sm:px-6 pt-16">
          <Card className="max-w-4xl mx-auto border border-border/85 bg-muted/20 p-8 rounded-2xl text-center space-y-4">
            <h3 className="text-lg font-bold text-foreground">Want personalized preparation mentoring?</h3>
            <p className="text-xs text-muted-foreground max-w-lg mx-auto">
              Our counsellors can help design a customized exam preparation timetable based on your goals, timing, and mock results.
            </p>
            <Link 
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-full flex items-center justify-center w-fit mx-auto"
              )}
            >
              Book Free Counselling
            </Link>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
