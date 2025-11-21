"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import { generateBreadcrumbs } from "@/lib/generate-breadcrumbs"

interface BreadcrumbsAutoProps {
  separator?: React.ReactNode
  className?: string
  activeClassName?: string
  inactiveClassName?: string
}

export default function BreadcrumbsAuto({
  separator,
  className,
  activeClassName,
  inactiveClassName,
}: BreadcrumbsAutoProps) {
  const pathname = usePathname()
  const breadcrumbs = generateBreadcrumbs(pathname)

  return (
    <Breadcrumbs
      items={breadcrumbs}
      separator={separator}
      className={className}
      activeClassName={activeClassName}
      inactiveClassName={inactiveClassName}
    />
  )
}

export { BreadcrumbsAuto }
