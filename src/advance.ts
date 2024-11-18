// Remove extra spaces or all whitespace
function removeWhitespace(str: string, removeAll: boolean = false): string {
    if (removeAll) {
        return str.replace(/\s+/g, '');  // Remove all whitespace characters
    }
    return str.replace(/\s+/g, ' ').trim();  // Replace multiple spaces with a single space
}

// Check if a string is a palindrome
function isPalindrome(str: string): boolean {
    if (!str) return false;
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase(); // Normalize the string
    const reversed = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversed;
}

// Count the number of words in a string
function wordCount(str: string): number {
    if (!str) return 0;
    return str.trim().split(/\s+/).length;
}

// Remove special characters, keeping only alphanumeric characters
function removeSpecialChars(str: string): string {
    return str.replace(/[^a-zA-Z0-9]/g, ''); // Remove all non-alphanumeric characters
}

// Export the functions
export {
    removeSpecialChars,
    removeWhitespace,
    isPalindrome,
    wordCount
}
