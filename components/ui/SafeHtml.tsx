"use client"

import React from 'react'
import { sanitizeHtml } from '@/lib/html-utils'

interface SafeHtmlProps {
  /** Raw HTML content to render */
  content: string
  /** HTML tag to wrap the content in */
  as?: React.ElementType
  /** CSS classes to apply to the wrapper element */
  className?: string
  /** Additional sanitization options */
  sanitizeOptions?: {
    allowedTags?: string[]
    allowedAttributes?: string[]
    removeEmptyElements?: boolean
  }
  /** Fallback content when HTML is empty or invalid */
  fallback?: React.ReactNode
  /** Maximum character length for truncation */
  maxLength?: number
  /** Truncation suffix */
  truncateSuffix?: string
}

/**
 * SafeHtml Component
 * 
 * Safely renders HTML content from API responses by sanitizing it through DOMPurify.
 * This component prevents XSS attacks while preserving formatting.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <SafeHtml content="<p>Hello <strong>world</strong>!</p>" />
 * 
 * // With custom wrapper and styling
 * <SafeHtml 
 *   content="<p>Formatted content</p>"
 *   as="div"
 *   className="prose prose-lg"
 * />
 * 
 * // With truncation
 * <SafeHtml 
 *   content="<p>Very long content...</p>"
 *   maxLength={100}
 *   truncateSuffix="... read more"
 * />
 * 
 * // With custom allowed tags
 * <SafeHtml 
 *   content="<script>alert('xss')</script><p>Safe content</p>"
 *   sanitizeOptions={{
 *     allowedTags: ['p', 'strong', 'em']
 *   }}
 * />
 * ```
 */
export function SafeHtml({
  content,
  as: Component = 'div',
  className = '',
  sanitizeOptions,
  fallback = null,
  maxLength,
  truncateSuffix = '...'
}: SafeHtmlProps) {
  if (!content || typeof content !== 'string') {
    return <>{fallback}</>
  }

  let processedContent = content

  // Truncate if maxLength is specified
  if (maxLength && typeof maxLength === 'number' && maxLength > 0) {
    // First strip HTML to check actual text length
    const textContent = sanitizeHtml(content, { allowedTags: [] })
    if (textContent.length > maxLength) {
      const truncated = textContent.substring(0, maxLength - truncateSuffix.length).trim()
      processedContent = `${truncated}${truncateSuffix}`
    }
  }

  // Sanitize the HTML content
  const sanitizedContent = sanitizeHtml(processedContent, sanitizeOptions)

  // Return fallback if sanitization results in empty content
  if (!sanitizedContent.trim()) {
    return <>{fallback}</>
  }

  return (
    <Component
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  )
}

/**
 * SafeHtmlInline Component
 * 
 * A specialized version of SafeHtml for inline content that uses a span wrapper.
 * Useful for rendering HTML in navigation, headers, or other inline contexts.
 */
export function SafeHtmlInline({
  content,
  className = '',
  sanitizeOptions,
  fallback = null,
  maxLength,
  truncateSuffix = '...'
}: Omit<SafeHtmlProps, 'as'>) {
  return (
    <SafeHtml
      content={content}
      as="span"
      className={className}
      sanitizeOptions={sanitizeOptions}
      fallback={fallback}
      maxLength={maxLength}
      truncateSuffix={truncateSuffix}
    />
  )
}

/**
 * SafeHtmlText Component
 * 
 * Renders HTML content as plain text by stripping all HTML tags.
 * Useful for meta descriptions, alt text, or other contexts where HTML is not allowed.
 */
export function SafeHtmlText({
  content,
  className = '',
  fallback = null,
  maxLength,
  truncateSuffix = '...'
}: Omit<SafeHtmlProps, 'as' | 'sanitizeOptions'>) {
  if (!content || typeof content !== 'string') {
    return <>{fallback}</>
  }

  // Strip all HTML tags to get plain text
  const textContent = sanitizeHtml(content, { allowedTags: [] })
  
  let processedText = textContent

  // Truncate if maxLength is specified
  if (maxLength && typeof maxLength === 'number' && maxLength > 0) {
    if (textContent.length > maxLength) {
      processedText = textContent.substring(0, maxLength - truncateSuffix.length).trim() + truncateSuffix
    }
  }

  if (!processedText.trim()) {
    return <>{fallback}</>
  }

  return <span className={className}>{processedText}</span>
}

export default SafeHtml
