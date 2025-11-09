/**
 * Escapes special LaTeX characters in a string
 * Preserves \textbf{} commands for bold text
 * @param {string} str - The string to escape
 * @returns {string} - The escaped string
 */
export const escapeLatex = (str) => {
  if (typeof str !== 'string') return '';
  
  // First convert *word* to \textbf{word}
  let result = str.replace(/\*([^*]+)\*/g, '\\textbf{$1}');
  
  // Split on \textbf{...} to process separately
  const parts = result.split(/(\\textbf\{[^}]*\})/);
  
  result = parts.map((part, index) => {
    // Don't escape \textbf{} commands (odd indices)
    if (index % 2 === 1) {
      return part;
    }
    
    // Escape special characters in regular text
    return part
      .replace(/\\/g, '\\textbackslash{}')
      .replace(/&/g, '\\&')
      .replace(/%/g, '\\%')
      .replace(/\$/g, '\\$')
      .replace(/#/g, '\\#')
      .replace(/_/g, '\\_')
      .replace(/{/g, '\\{')
      .replace(/}/g, '\\}')
      .replace(/~/g, '\\textasciitilde{}')
      .replace(/\^/g, '\\textasciicircum{}');
  }).join('');
  
  return result;
};

/**
 * Ensures URL has http/https protocol
 * @param {string} url - The URL to process
 * @returns {string} - URL with protocol
 */
export const ensureHttpProtocol = (url) => {
  if (!url || typeof url !== 'string') return url;
  const trimmedUrl = url.trim();
  if (!trimmedUrl.startsWith('http://') && !trimmedUrl.startsWith('https://')) {
    return `https://${trimmedUrl}`;
  }
  return trimmedUrl;
};
