// Normalize accents/diacritics in text
function normalize(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove diacritical marks
}

// Generate URL-friendly slugs from strings
function slugify(str: string): string {
    return str
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^\w-]+/g, '') // Remove non-alphanumeric characters (except hyphen)
        .replace(/--+/g, '-') // Replace multiple hyphens with one
        .trim() // Remove any leading/trailing spaces
        .replace(/^[-]+|[-]+$/g, ''); // Remove any leading/trailing hyphens
}

// Convert a string to Title Case
function toTitleCase(str: string): string {
    return str
        .toLowerCase()
        .replace(/\b\w/g, char => char.toUpperCase()) // Capitalize the first letter of each word
        .replace(/\b(?:the|a|an|in|on|at|for|and|but|or|so|nor|of|to)\b/g, (match) => match.toLowerCase()); // Handle small words
}

// Export all functions
export {
    normalize,
    slugify,
    toTitleCase,
}
