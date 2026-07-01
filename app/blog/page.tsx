'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { blogs } from '@/data/blogs'
import { Button } from '@/components/ui/button'
import { Clock, Calendar, ArrowRight, ChevronDown } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { cn } from '@/lib/utils'

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

export default function BlogListPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const categories = ['All', 'Banking', 'SSC', 'MBA']
  
  const filteredBlogs = activeCategory === 'All' 
    ? blogs 
    : blogs.filter(b => b.category === activeCategory)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-16">
        
        {/* Header Hero */}
        <section className="bg-gradient-to-r from-acs-blue/5 via-acs-green/5 to-acs-blue/5 border-b border-border/40 py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/10 mb-4 inline-block">
                Knowledge Hub
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                Latest from Our <span className="text-acs-blue-light">Blog</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Expert tips, preparation strategies, syllabus updates, and current affairs curated by senior faculty at ACS Academy.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filters Selector */}
        <div className="container mx-auto px-4 sm:px-6 py-8 flex justify-center">
          
          {/* Mobile Select Dropdown */}
          <div className="flex md:hidden w-full max-w-xs">
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex shrink-0 items-center justify-between rounded-xl border border-border/40 bg-white px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all outline-none select-none w-full shadow-xs cursor-pointer hover:bg-muted hover:text-foreground h-9">
                <span>Category: {activeCategory}</span>
                <ChevronDown className="size-4 opacity-50 shrink-0" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white border border-border/40 rounded-xl p-1 shadow-md">
                {categories.map((cat) => (
                  <DropdownMenuItem
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "cursor-pointer rounded-lg text-xs sm:text-sm font-semibold p-2.5 transition-colors",
                      activeCategory === cat ? "bg-primary/5 text-primary" : "hover:bg-acs-cream"
                    )}
                  >
                    {cat}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:block">
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-auto">
              <TabsList className="flex h-auto p-1.5 bg-muted rounded-xl gap-1">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-lg data-active:bg-background data-active:text-primary data-active:shadow-sm transition-all cursor-pointer"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

        </div>

        {/* Blogs Grid */}
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => {
              const colors = CATEGORY_COLORS[post.category] || { bg: 'bg-muted', text: 'text-muted-foreground', border: 'border-border/40' }
              return (
                <Card 
                  key={post.slug} 
                  className="border border-border/40 bg-card hover:border-primary/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between rounded-2xl"
                >
                  <CardHeader className="pt-6 pb-3 px-6 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className={cn("text-[10px] uppercase px-2.5 py-0.5 rounded-full border font-bold tracking-wide", colors.bg, colors.text, colors.border)}>
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold">
                        <Clock className="size-3.5 text-primary shrink-0" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-base font-extrabold text-foreground leading-snug hover:text-primary transition-colors pt-1">
                      <Link href={`/blog/${post.slug}`} className="block leading-relaxed">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="py-2 px-6">
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>

                  <CardFooter className="border-t border-border/40 px-6 py-4 flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-semibold">
                      <Calendar className="size-3.5 text-primary shrink-0" />
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
              )
            })}
          </div>
        </div>

        {/* CTA section */}
        <div className="container mx-auto px-4 sm:px-6 pt-16">
          <Card className="max-w-4xl mx-auto border border-border/40 bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl text-center space-y-4 shadow-sm">
            <h3 className="text-lg font-bold text-foreground">Want personalized preparation mentoring?</h3>
            <p className="text-xs text-muted-foreground max-w-lg mx-auto">
              Our counsellors can help design a customized exam preparation timetable based on your goals, timing, and mock results.
            </p>
            <Link 
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primary hover:bg-primary/95 text-primary-foreground font-semibold px-6 rounded-full flex items-center justify-center w-fit mx-auto shadow-sm shadow-primary/20"
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
