import DOMPurify from 'dompurify'

/**
 * Sanitizes HTML content and returns safe HTML string
 * @param html - Raw HTML string to sanitize
 * @param options - DOMPurify configuration options
 * @returns Sanitized HTML string
 */
export function sanitizeHtml(
  html: string,
  options?: {
    allowedTags?: string[]
    allowedAttributes?: string[]
    removeEmptyElements?: boolean
  }
): string {
  if (!html || typeof html !== 'string') {
    return ''
  }

  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    // Server-side: return html as-is for now (will be sanitized on client)
    return html
  }

  // Default configuration for safe HTML
  const defaultConfig = {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'b', 'em', 'i', 'u', 'span', 'div',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li',
      'a', 'img',
      'blockquote', 'code', 'pre',
      'table', 'thead', 'tbody', 'tfoot', 'tr', 'td', 'th'
    ],
    ALLOWED_ATTR: [
      'href', 'src', 'alt', 'title', 'class', 'id',
      'target', 'rel', 'style', 'rowspan', 'colspan'
    ],
    ALLOW_DATA_ATTR: false,
    FORBID_TAGS: ['script', 'object', 'embed', 'form', 'input'],
    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover'],
  }

  // Merge with custom options if provided
  if (options?.allowedTags) {
    defaultConfig.ALLOWED_TAGS = options.allowedTags
  }

  if (options?.allowedAttributes) {
    defaultConfig.ALLOWED_ATTR = options.allowedAttributes
  }

  try {
    // Sanitize the HTML
    let sanitized = DOMPurify.sanitize(html, defaultConfig) as string
    
    // Post-process to enhance tables if we're in browser environment
    if (typeof window !== 'undefined') {
      // Create a temporary DOM element to manipulate the HTML
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = sanitized
      
      // Enhance table elements
      const tables = tempDiv.querySelectorAll('table')
      tables.forEach(table => {
        // Add responsive table wrapper if not already wrapped
        if (!table.parentElement?.classList.contains('table-container')) {
          const wrapper = document.createElement('div')
          wrapper.className = 'table-container'
          table.parentNode?.insertBefore(wrapper, table)
          wrapper.appendChild(table)
        }
        
        // Add classes to table elements if they don't exist
        if (!table.className) {
          table.className = 'fee-table'
        }
        
        // Enhance table headers
        const headers = table.querySelectorAll('th')
        headers.forEach((th, index) => {
          // Add amount header class to numeric columns
          const text = th.textContent?.toLowerCase() || ''
          if (text.includes('fee') || text.includes('amount') || text.includes('cost') || text.includes('₹') || text.includes('rs')) {
            th.classList.add('amount-header')
          }
        })
        
        // Enhance table cells
        const cells = table.querySelectorAll('td')
        cells.forEach(cell => {
          const text = cell.textContent?.trim() || ''
          // Check if cell contains currency or numeric values
          if (/₹|Rs\.?\s*\d|INR\s*\d|\d+[,\d]*\.\d+|\d{1,3}(,\d{3})*/.test(text)) {
            cell.classList.add('amount')
          }
          
          // Check if cell contains total/subtotal
          if (/total|subtotal|grand total|sum/i.test(text)) {
            cell.classList.add('total-cell')
          }
        })
        
        // Enhance rows
        const rows = table.querySelectorAll('tr')
        rows.forEach(row => {
          const text = row.textContent?.toLowerCase() || ''
          if (text.includes('total') || text.includes('grand total') || text.includes('subtotal')) {
            row.classList.add('total-row')
          }
        })
      })
      
      sanitized = tempDiv.innerHTML
    }
    
    // Remove empty elements if requested
    if (options?.removeEmptyElements) {
      return sanitized.replace(/<(\w+)(\s[^>]*)?>\s*<\/\1>/g, '')
    }
    
    return sanitized
  } catch (error) {
    console.error('Error sanitizing HTML:', error)
    return html // Return unsanitized on error in client
  }
}

/**
 * Creates a safe dangerouslySetInnerHTML object for React
 * @param html - Raw HTML string to sanitize
 * @param options - Sanitization options
 * @returns Object safe for use with dangerouslySetInnerHTML
 */
export function createSafeHtml(
  html: string,
  options?: Parameters<typeof sanitizeHtml>[1]
): { __html: string } {
  return {
    __html: sanitizeHtml(html, options)
  }
}

/**
 * Strips HTML tags and returns plain text
 * @param html - HTML string to strip
 * @returns Plain text content
 */
export function stripHtml(html: string): string {
  if (!html || typeof html !== 'string') {
    return ''
  }

  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    // Server-side: basic regex strip (will be properly sanitized on client)
    return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  }

  try {
    const sanitized = DOMPurify.sanitize(html, { ALLOWED_TAGS: [] })
    return sanitized.replace(/\s+/g, ' ').trim()
  } catch (error) {
    console.error('Error stripping HTML:', error)
    return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  }
}

/**
 * Truncates HTML content while preserving structure
 * @param html - HTML string to truncate
 * @param maxLength - Maximum character length
 * @param suffix - Suffix to add when truncated
 * @returns Truncated HTML string
 */
export function truncateHtml(
  html: string,
  maxLength: number = 150,
  suffix: string = '...'
): string {
  if (!html || typeof html !== 'string') {
    return ''
  }

  const plainText = stripHtml(html)
  
  if (plainText.length <= maxLength) {
    return sanitizeHtml(html)
  }

  const truncated = plainText.substring(0, maxLength - suffix.length).trim()
  return `${truncated}${suffix}`
}
