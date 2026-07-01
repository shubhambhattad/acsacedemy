'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { buttonVariants } from '@/components/ui/button'
import { courses, courseCategories } from '@/data/courses'
import { Clock, GraduationCap, Users, AlertCircle, Sun, CloudSun, Cloud, CloudMoon, Moon } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const batchTimings = [
  { icon: Sun, time: '8:00 AM – 9:30 AM', label: 'Early Morning Batch', seats: '12 seats left', color: 'text-green-600 dark:text-green-500' },
  { icon: Sun, time: '10:00 AM – 11:30 AM', label: 'Morning Batch', seats: '5 seats left', color: 'text-yellow-600 dark:text-yellow-500' },
  { icon: CloudSun, time: '12:00 PM – 1:30 PM', label: 'Afternoon Batch', seats: '8 seats left', color: 'text-green-600 dark:text-green-500' },
  { icon: Cloud, time: '3:30 PM – 5:00 PM', label: 'Evening Batch', seats: 'Almost Full', color: 'text-red-600 dark:text-red-500', popular: true },
  { icon: CloudMoon, time: '5:00 PM – 6:30 PM', label: 'Late Evening Batch', seats: '10 seats left', color: 'text-green-600 dark:text-green-500' },
  { icon: Moon, time: '9:00 PM – 10:00 PM', label: 'Night Batch (Online)', seats: 'Open', color: 'text-green-600 dark:text-green-500' },
]

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background py-12">
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6 mb-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              Our Programs
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
              Courses For Every <span className="text-primary">Aspirant</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Comprehensive coaching for all major competitive exams. Choose your stream, check details, and enroll to begin your journey.
            </p>
          </div>
        </div>

        {/* Tabbed Course Selector */}
        <div className="container mx-auto px-4 sm:px-6 mb-20">
          <Tabs defaultValue="banking" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="flex flex-wrap justify-center h-auto p-1.5 bg-muted rounded-xl gap-1">
                {courseCategories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.keys(courses).map((catId) => (
              <TabsContent key={catId} value={catId} className="outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses[catId].map((course, idx) => (
                    <Card 
                      key={idx} 
                      className="border border-border/80 bg-card hover:border-primary/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start gap-2">
                          <CardTitle className="text-lg font-bold text-foreground">
                            {course.name}
                          </CardTitle>
                          {course.badge && (
                            <span className="shrink-0 text-[10px] font-bold uppercase bg-secondary/15 text-secondary px-2 py-0.5 rounded border border-secondary/10">
                              {course.badge}
                            </span>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4 py-2">
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Rigorous and up-to-date classroom preparation with expert-crafted modules designed for maximum accuracy.
                        </p>
                        <div className="space-y-2 text-xs font-semibold text-foreground/80 border-t border-border/40 pt-3">
                          <div className="flex items-center gap-2">
                            <Clock className="size-4 text-primary" />
                            <span>Duration: {course.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <GraduationCap className="size-4 text-primary" />
                            <span>Fee: {course.fee} (Installments available)</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/30 border-t border-border/40 px-6 py-4 flex gap-4 items-center justify-between">
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-semibold">
                          <Users className="size-3.5 text-primary" />
                          <span>Seats Filling Fast</span>
                        </div>
                        <Link 
                          href="/contact"
                          className={cn(
                            buttonVariants({ size: "sm" }),
                            "bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg text-xs"
                          )}
                        >
                          Enroll Now
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Batch Timings Section */}
        <div className="bg-muted/30 border-y border-border/50 py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                Schedule
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight mt-4 mb-3">
                Flexible <span className="text-primary">Batch Timings</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                We offer multiple slots to match your college or job commitments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {batchTimings.map((b, idx) => {
                const Icon = b.icon
                return (
                  <Card 
                    key={idx} 
                    className={`relative border transition-all hover:shadow-sm ${
                      b.popular ? 'border-primary shadow-sm bg-card' : 'border-border/80 bg-card'
                    }`}
                  >
                    {b.popular && (
                      <span className="absolute top-0 right-4 -translate-y-1/2 bg-primary text-primary-foreground text-[9px] uppercase font-black px-2 py-0.5 rounded-full border border-primary">
                        Most Popular
                      </span>
                    )}
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/5 rounded-lg text-primary">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <CardTitle className="text-sm font-bold text-foreground">
                            {b.time}
                          </CardTitle>
                          <p className="text-[10px] text-muted-foreground">
                            {b.label}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <div className="flex items-center gap-1.5 text-xs">
                        <AlertCircle className={`size-3.5 ${b.color}`} />
                        <span className="text-muted-foreground font-semibold">
                          Status: <span className="text-foreground">{b.seats}</span>
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="container mx-auto px-4 sm:px-6 pt-16">
          <Card className="max-w-4xl mx-auto border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-8 sm:p-10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl font-bold text-foreground">Not sure which course is right for you?</h3>
              <p className="text-xs text-muted-foreground max-w-lg">
                Book a face-to-face counselling session at our Karve Road centre. Meet our experienced faculty and map out your target preparation route.
              </p>
            </div>
            <Link 
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shrink-0 shadow-md flex items-center justify-center"
              )}
            >
              Talk to a Counsellor
            </Link>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
