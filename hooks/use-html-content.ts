"use client"

import { useMemo } from 'react'
import { sanitizeHtml, stripHtml, createSafeHtml } from '@/lib/html-utils'

interface UseHtmlContentOptions {
  /** Maximum character length for truncation */
  maxLength?: number
  /** Suffix to add when content is truncated */
  truncateSuffix?: string
  /** Custom sanitization options */
  sanitizeOptions?: {
    allowedTags?: string[]
    allowedAttributes?: string[]
    removeEmptyElements?: boolean
  }
}

interface UseHtmlContentReturn {
  /** Sanitized HTML content safe for dangerouslySetInnerHTML */
  sanitizedHtml: string
  /** Plain text version (HTML tags stripped) */
  plainText: string
  /** Object ready for dangerouslySetInnerHTML */
  safeHtml: { __html: string }
  /** Whether the content was truncated */
  isTruncated: boolean
  /** Original content length (before sanitization) */
  originalLength: number
  /** Final content length (after processing) */
  finalLength: number
}

/**
 * Custom hook for processing and sanitizing HTML content from API responses
 * 
 * @param content - Raw HTML content from API
 * @param options - Processing options
 * @returns Processed content in various formats
 * 
 * @example
 * ```tsx
 * function MyComponent({ apiContent }: { apiContent: string }) {
 *   const { sanitizedHtml, plainText, safeHtml, isTruncated } = useHtmlContent(apiContent, {
 *     maxLength: 150,
 *     truncateSuffix: '... read more'
 *   })
 * 
 *   return (
 *     <div>
 *       {// For dangerouslySetInnerHTML //}
 *       <div dangerouslySetInnerHTML={safeHtml} />
 *       
 *       {// For meta descriptions //}
 *       <meta name="description" content={plainText} />
 *       
 *       {// Show indicator if truncated //}
 *       {isTruncated && <button>Read More</button>}
 *     </div>
 *   )
 * }
 * ```
 */
export function useHtmlContent(
  content: string | null | undefined,
  options: UseHtmlContentOptions = {}
): UseHtmlContentReturn {
  const {
    maxLength,
    truncateSuffix = '...',
    sanitizeOptions
  } = options

  return useMemo(() => {
    // Return empty results for invalid content
    if (!content || typeof content !== 'string') {
      return {
        sanitizedHtml: '',
        plainText: '',
        safeHtml: { __html: '' },
        isTruncated: false,
        originalLength: 0,
        finalLength: 0
      }
    }

    const originalLength = content.length
    let processedContent = content
    let isTruncated = false

    // Handle truncation if maxLength is specified
    if (maxLength && typeof maxLength === 'number' && maxLength > 0) {
      // First get plain text to check actual content length
      const textContent = stripHtml(content)
      
      if (textContent.length > maxLength) {
        const truncated = textContent.substring(0, maxLength - truncateSuffix.length).trim()
        processedContent = `${truncated}${truncateSuffix}`
        isTruncated = true
      }
    }

    // Sanitize the HTML content
    const sanitizedHtml = sanitizeHtml(processedContent, sanitizeOptions)
    
    // Get plain text version
    const plainText = stripHtml(sanitizedHtml)
    
    // Create safe HTML object
    const safeHtml = createSafeHtml(processedContent, sanitizeOptions)

    return {
      sanitizedHtml,
      plainText,
      safeHtml,
      isTruncated,
      originalLength,
      finalLength: sanitizedHtml.length
    }
  }, [content, maxLength, truncateSuffix, sanitizeOptions])
}

/**
 * Hook for processing multiple HTML content fields at once
 * Useful when you have an object with multiple HTML fields
 * 
 * @example
 * ```tsx
 * function ArticleComponent({ article }: { article: ApiArticle }) {
 *   const processedContent = useMultipleHtmlContent({
 *     title: article.title,
 *     description: article.description,
 *     content: article.content
 *   }, {
 *     description: { maxLength: 160 },
 *     content: { maxLength: 500 }
 *   })
 * 
 *   return (
 *     <article>
 *       <h1 dangerouslySetInnerHTML={processedContent.title.safeHtml} />
 *       <p dangerouslySetInnerHTML={processedContent.description.safeHtml} />
 *       <div dangerouslySetInnerHTML={processedContent.content.safeHtml} />
 *     </article>
 *   )
 * }
 * ```
 */
export function useMultipleHtmlContent<T extends Record<string, string | null | undefined>>(
  contentFields: T,
  fieldOptions: Partial<Record<keyof T, UseHtmlContentOptions>> = {}
): Record<keyof T, UseHtmlContentReturn> {
  return useMemo(() => {
    const result = {} as Record<keyof T, UseHtmlContentReturn>
    
    for (const [key, content] of Object.entries(contentFields)) {
      const options = fieldOptions[key as keyof T] || {}
      
      if (!content || typeof content !== 'string') {
        result[key as keyof T] = {
          sanitizedHtml: '',
          plainText: '',
          safeHtml: { __html: '' },
          isTruncated: false,
          originalLength: 0,
          finalLength: 0
        }
      } else {
        const originalLength = content.length
        let processedContent = content
        let isTruncated = false

        // Handle truncation
        if (options.maxLength && typeof options.maxLength === 'number' && options.maxLength > 0) {
          const textContent = stripHtml(content)
          
          if (textContent.length > options.maxLength) {
            const truncated = textContent.substring(0, options.maxLength - (options.truncateSuffix || '...').length).trim()
            processedContent = `${truncated}${options.truncateSuffix || '...'}`
            isTruncated = true
          }
        }

        const sanitizedHtml = sanitizeHtml(processedContent, options.sanitizeOptions)
        const plainText = stripHtml(sanitizedHtml)
        const safeHtml = createSafeHtml(processedContent, options.sanitizeOptions)

        result[key as keyof T] = {
          sanitizedHtml,
          plainText,
          safeHtml,
          isTruncated,
          originalLength,
          finalLength: sanitizedHtml.length
        }
      }
    }
    
    return result
  }, [contentFields, fieldOptions])
}

export default useHtmlContent
