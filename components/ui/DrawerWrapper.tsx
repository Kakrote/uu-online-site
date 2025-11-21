"use client"

import Drawer from "@/components/ui/Drawer";
import { usePathname } from "next/navigation";

export default function DrawerWrapper() {
  const pathname = usePathname();
  if (pathname === "/apply") return null;
  return (
    <div className="fixed bottom-0 w-full sm:w-fit sm:h-fit sm:bottom-4 z-50 sm:right-4 md:top-1/2 md:bottom-auto md:right-0 lg:right-0 bg-[#4d18a1c4]/30 shadow-[0_35px_35px_rgba(0,0,0,0.25)] lg:rounded-xl sm:py-4 lg:pt-[2.5rem] lg:pb-[0.5rem] md:transform md:-translate-y-1/2  overflow-hidden">
      <Drawer />
    </div>
  );
}
