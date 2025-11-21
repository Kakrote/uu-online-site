import type React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export interface BreadcrumbItem {
  label: string
  href: string
  isActive?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  className?: string
  activeClassName?: string
  inactiveClassName?: string
}

export default function Breadcrumbs({
  items,
  separator = <ChevronRight className="h-4 w-4 text-gray-400" />,
  // Make the nav horizontally scrollable on small screens to prevent overflow
  className = "w-full overflow-x-auto text-sm",
  activeClassName = "text-[#6bc533] font-medium",
  inactiveClassName = "text-gray-500 hover:text-gray-700",
}: BreadcrumbsProps) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <nav className={className} aria-label="Breadcrumb">
      {/* Use gap and no-wrap so long paths can scroll horizontally on mobile */}
      <ol className="flex items-center gap-2 whitespace-nowrap">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <span>{separator}</span>}
            {item.isActive ? (
              <span className={activeClassName} aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className={inactiveClassName}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
