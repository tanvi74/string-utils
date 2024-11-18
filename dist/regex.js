"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceAll = exports.extractNumbers = exports.extractEmails = void 0;
// Extract all email addresses from a string
function extractEmails(str) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    return str.match(emailRegex) || [];
}
exports.extractEmails = extractEmails;
// Extract all numbers from a string
function extractNumbers(str) {
    const numbers = str.match(/\d+/g);
    return numbers ? numbers.map(Number) : [];
}
exports.extractNumbers = extractNumbers;
// Replace all occurrences of a substring without regex quirks
function replaceAll(str, search, replacement) {
    return str.split(search).join(replacement); // Use split and join to replace all occurrences
}
exports.replaceAll = replaceAll;
