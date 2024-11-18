"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordCount = exports.isPalindrome = exports.removeWhitespace = exports.removeSpecialChars = void 0;
// Remove extra spaces or all whitespace
function removeWhitespace(str, removeAll = false) {
    if (removeAll) {
        return str.replace(/\s+/g, ''); // Remove all whitespace characters
    }
    return str.replace(/\s+/g, ' ').trim(); // Replace multiple spaces with a single space
}
exports.removeWhitespace = removeWhitespace;
// Check if a string is a palindrome
function isPalindrome(str) {
    if (!str)
        return false;
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase(); // Normalize the string
    const reversed = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversed;
}
exports.isPalindrome = isPalindrome;
// Count the number of words in a string
function wordCount(str) {
    if (!str)
        return 0;
    return str.trim().split(/\s+/).length;
}
exports.wordCount = wordCount;
// Remove special characters, keeping only alphanumeric characters
function removeSpecialChars(str) {
    return str.replace(/[^a-zA-Z0-9]/g, ''); // Remove all non-alphanumeric characters
}
exports.removeSpecialChars = removeSpecialChars;
