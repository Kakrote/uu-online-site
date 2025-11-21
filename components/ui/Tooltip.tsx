"use client"
import React from "react"
import { createPortal } from "react-dom"

type Side = "left" | "right" | "top" | "bottom"

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  side?: Side
  offset?: number
  className?: string
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  side = "left",
  offset = 12,
  className,
}) => {
  const [open, setOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [coords, setCoords] = React.useState<{ top: number; left: number } | null>(null)
  const triggerRef = React.useRef<HTMLSpanElement | null>(null)
  const tooltipRef = React.useRef<HTMLDivElement | null>(null)
  const id = React.useId()

  React.useEffect(() => setMounted(true), [])

  const computePosition = React.useCallback(() => {
    const el = triggerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    let top = 0
    let left = 0

    switch (side) {
      case "left":
        top = rect.top + rect.height / 2
        left = rect.left - offset
        break
      case "right":
        top = rect.top + rect.height / 2
        left = rect.right + offset
        break
      case "top":
        top = rect.top - offset
        left = rect.left + rect.width / 2
        break
      case "bottom":
        top = rect.bottom + offset
        left = rect.left + rect.width / 2
        break
    }
    setCoords({ top, left })
  }, [side, offset])

  const show = () => {
    computePosition()
    setOpen(true)
  }
  const hide = () => setOpen(false)

  React.useEffect(() => {
    if (!open) return
    const handle = () => computePosition()
    window.addEventListener("scroll", handle, { passive: true })
    window.addEventListener("resize", handle)
    return () => {
      window.removeEventListener("scroll", handle)
      window.removeEventListener("resize", handle)
    }
  }, [open, computePosition])

  // Decide transform based on side
  const transformBySide: Record<Side, string> = {
    left: "-translate-x-full -translate-y-1/2 ",
    right: "-translate-y-1/2",
    top: "-translate-x-1/2 -translate-y-full",
    bottom: "-translate-x-1/2",
  }

  const arrowSidePos: Record<Side, string> = {
    left: "left-full top-1/2 -translate-y-1/2",
    right: "right-full top-1/2 -translate-y-1/2",
    top: "top-full left-1/2 -translate-x-1/2",
    bottom: "bottom-full left-1/2 -translate-x-1/2",
  }

  const arrowRotate: Record<Side, string> = {
    left: "rotate-45",
    right: "-rotate-135",
    top: "-rotate-45",
    bottom: "rotate-135",
  }

  return (
    <span
      ref={triggerRef}
      aria-describedby={open ? id : undefined}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      className="inline-flex"
    >
      {children}

      {mounted && open && coords &&
        createPortal(
          <div
            id={id}
            ref={tooltipRef}
            role="tooltip"
            style={{ top: coords.top, left: coords.left, position: "fixed" }}
            className={[
              // Positioning transforms by side
              transformBySide[side],
              // Visuals
              "z-[99999] pointer-events-none select-none",
              "rounded-md border border-white/10 bg-neutral-950/80 text-white text-xs font-medium",
              "px-3 py-1.5 shadow-2xl backdrop-blur-md whitespace-nowrap",
              "ring-1 ring-[#6bc533]/40",
              // Animation
              "opacity-0 scale-95 animate-[tooltip-in_120ms_ease-out_forwards]",
              className || "",
            ].join(" ")}
          >
            {content}
            {/* Arrow */}
            <span
              aria-hidden="true"
              className={[
                "absolute h-2 w-2 bg-neutral-950/80 border border-white/10",
                "ring-1 ring-[#6bc533]/30",
                arrowSidePos[side],
                arrowRotate[side],
              ].join(" ")}
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.35)" }}
            />
          </div>,
          document.body
        )}
      <style jsx global>{`
        @keyframes tooltip-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </span>
  )
}

export default Tooltip
