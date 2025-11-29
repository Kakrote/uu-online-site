import type React from "react"
import UniversityHeader from "@/components/ui/UniversityHeader"
import UniversityFooter from "@/components/ui/UniversityFooter"
import PageAnimationWrapper from "@/components/ui/PageAnimationWrapper"

interface CommonLayoutProps {
  children: React.ReactNode
}

export default function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen font-figtree">
      <UniversityHeader />
      <main className="flex-grow">
        <PageAnimationWrapper>
          {children}
        </PageAnimationWrapper>
      </main>
      <UniversityFooter />
    </div>
  )
}

export { CommonLayout }
