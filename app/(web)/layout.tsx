import { auth } from "@/auth"
import PatternGap from "@/components/general/pattern-gap"
import FooterSection from "@/components/web/footer"
import WebNavbar from "@/components/web/web-navbar"
import type { ReactNode } from "react"

async function WebLayout({ children }: { children: ReactNode }) {
  const session = await auth()
  return (
    <div className="max-w-screen overflow-x-hidden">
      <main className="max-w-5xl mx-auto border-x bg-background mt-14">
        <WebNavbar session={session} />
        {children}
        <PatternGap />
        <FooterSection />
      </main>
    </div>
  )
}

export default WebLayout
