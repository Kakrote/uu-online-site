import type { BreadcrumbItem } from "@/components/ui/breadcrumbs"

// Define route mappings for better labels
const routeLabels: Record<string, string> = {
  "": "Home",
  about: "About",
  university: "University",
  leadership: "Leadership",
  "vision-mission": "Vision & Mission",
  "accreditations-approvals": "Accreditations & Approvals",
  "awards-rankings": "Awards & Rankings",
  "institutional-social-responsibilities": "Institutional Social Responsibilities",
  "international-collaborations-tie-ups": "International Collaborations & Tie-Ups",
  governance: "Governance",
  scholarships: "Scholarships",
  infrastructure: "Infrastructure",
  programs: "Programs",
  engineering: "Engineering",
  "club-socities": "Clubs & Societies",
  admissions: "Admissions",
  "after-12th": "After 12th",
  "after-graduation": "After Graduation",
  "phd-programs": "PhD Programs",
  "industry-sponsored-programs": "Industry Sponsored Programs",
  "leet-programs": "LEET Programs",
  "refund-policy": "Refund Policy",
  "how-to-apply": "How to Apply", // Added new route label
  contact: "Contact",
  blank: "Blank Page",
  "life-at-uu": "Life at UU",
  cultural: "Cultural Activities",
  ncc: "NCC",
  nss: "NSS",
  sports: "Sports",
}

// Function to convert kebab-case to title case
function kebabToTitle(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

// Function to get label for a route segment
function getRouteLabel(segment: string): string {
  return routeLabels[segment] || kebabToTitle(segment)
}

export function generateBreadcrumbs(pathname?: string): BreadcrumbItem[] {
  // If pathname is missing, just return the root breadcrumb
  if (!pathname) {
    return [{ label: "Home", href: "/", isActive: true }]
  }
  // Remove leading slash and split into segments
  const segments = pathname.replace(/^\//, "").split("/").filter(Boolean)

  // Always start with home
  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: "Home",
      href: "/",
      isActive: pathname === "/",
    },
  ]

  // Build breadcrumbs for each segment
  let currentPath = ""

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const isLast = index === segments.length - 1

    breadcrumbs.push({
      label: getRouteLabel(segment),
      href: currentPath,
      isActive: isLast,
    })
  })

  return breadcrumbs
}
