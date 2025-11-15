"use client"
import { motion, AnimatePresence } from "framer-motion"
import React, { ReactNode, ElementType } from "react"

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={(typeof window !== 'undefined' ? window.location.pathname : 'page')}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}

export function AnimatedSection({ children, delay = 0, className, as: Tag = 'div' }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeIn', delay }}
      className={`overflow-x-hidden w-full ${className || ''}`}
      style={{ maxWidth: '100%', boxSizing: 'border-box' }}
    >
      {React.createElement(Tag, { className: 'contents' }, children)}
    </motion.div>
  )
}

export const fadeInProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeIn' }
}
