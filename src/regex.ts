// Extract all email addresses from a string
function extractEmails(str: string): string[] {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    return str.match(emailRegex) || [];
}

// Extract all numbers from a string
function extractNumbers(str: string): number[] {
    const numbers = str.match(/\d+/g);
    return numbers ? numbers.map(Number) : [];
}

// Replace all occurrences of a substring without regex quirks
function replaceAll(str: string, search: string, replacement: string): string {
    return str.split(search).join(replacement); // Use split and join to replace all occurrences
}

// Export all functions
export {
    extractEmails,
    extractNumbers,
    replaceAll
}
