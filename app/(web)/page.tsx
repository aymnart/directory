import BookGrid from "@/components/books/book-grid"
import PatternGap from "@/components/general/pattern-gap"
import HeroSection from "@/components/web/hero-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Road3",
  description: "A simple authentication service with sign-in functionality.",
}

export default async function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center w-full">
      <HeroSection />
      <PatternGap fullwidth />
      <section className="diagonal-pattern w-full flex flex-col gap-6 *:border-y *:first:border-t-0 *:last:border-b-0">
        <div className="w-full flex gap-6">
          <div className="relative bg-background border-r flex h-[200px] w-[61%] flex-col items-center justify-center px-5 py-2">
            {/* <BorderTrail gradient size={161} /> */}
            <output
              className="flex h-full animate-pulse flex-col items-start justify-center space-y-2"
              aria-label="Loading..."
            >
              <div className="h-1 w-4 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-10 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
            </output>
          </div>
          <div className="relative border-l bg-background flex h-[200px] w-[39%] flex-col items-center justify-center px-5 py-2">
            {/* <BorderTrail gradient size={161} /> */}
            <output
              className="flex h-full animate-pulse flex-col items-start justify-center space-y-2"
              aria-label="Loading..."
            >
              <div className="h-1 w-4 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-10 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
            </output>
          </div>
        </div>
        <div className="w-full flex gap-6 ">
          <div className="relative bg-background border-r flex h-[200px] w-[39%] flex-col items-center justify-center px-5 py-2">
            {/* <BorderTrail gradient size={161} /> */}
            <output
              className="flex h-full animate-pulse flex-col items-start justify-center space-y-2"
              aria-label="Loading..."
            >
              <div className="h-1 w-4 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-10 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
            </output>
          </div>
          <div className="relative border-l bg-background flex h-[200px] w-[61%] flex-col items-center justify-center px-5 py-2">
            {/* <BorderTrail gradient size={161} /> */}
            <output
              className="flex h-full animate-pulse flex-col items-start justify-center space-y-2"
              aria-label="Loading..."
            >
              <div className="h-1 w-4 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-10 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
            </output>
          </div>
        </div>
        <div className="w-full flex gap-6 ">
          <div className="relative bg-background border-r flex h-[200px] w-[61%] flex-col items-center justify-center px-5 py-2">
            {/* <BorderTrail gradient size={161} /> */}
            <output
              className="flex h-full animate-pulse flex-col items-start justify-center space-y-2"
              aria-label="Loading..."
            >
              <div className="h-1 w-4 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-10 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
            </output>
          </div>
          <div className="relative border-l bg-background flex h-[200px] w-[39%] flex-col items-center justify-center px-5 py-2">
            {/* <BorderTrail gradient size={161} /> */}
            <output
              className="flex h-full animate-pulse flex-col items-start justify-center space-y-2"
              aria-label="Loading..."
            >
              <div className="h-1 w-4 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-10 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
              <div className="h-1 w-12 rounded-[4px] bg-muted-foreground" />
            </output>
          </div>
        </div>
      </section>
      <PatternGap fullwidth />
      <BookGrid />
    </main>
  )
}
