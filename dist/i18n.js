"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTitleCase = exports.slugify = exports.normalize = void 0;
// Normalize accents/diacritics in text
function normalize(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove diacritical marks
}
exports.normalize = normalize;
// Generate URL-friendly slugs from strings
function slugify(str) {
    return str
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^\w-]+/g, '') // Remove non-alphanumeric characters (except hyphen)
        .replace(/--+/g, '-') // Replace multiple hyphens with one
        .trim() // Remove any leading/trailing spaces
        .replace(/^[-]+|[-]+$/g, ''); // Remove any leading/trailing hyphens
}
exports.slugify = slugify;
// Convert a string to Title Case
function toTitleCase(str) {
    return str
        .toLowerCase()
        .replace(/\b\w/g, char => char.toUpperCase()) // Capitalize the first letter of each word
        .replace(/\b(?:the|a|an|in|on|at|for|and|but|or|so|nor|of|to)\b/g, (match) => match.toLowerCase()); // Handle small words
}
exports.toTitleCase = toTitleCase;
