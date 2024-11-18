"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countOccurrences = exports.snakeToCamel = exports.camelToSnake = exports.camelAndSnaketoKebabCase = exports.toKebabCase = exports.toCamelCase = exports.truncate = exports.reverse = exports.capitalize = void 0;
// Capitalize the first letter of a string
function capitalize(str) {
    if (!str)
        return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalize = capitalize;
// Reverse the string
function reverse(str) {
    if (!str)
        return '';
    return str.split('').reverse().join('');
}
exports.reverse = reverse;
// Truncate the string
function truncate(str, maxLength) {
    if (!str || str.length <= maxLength)
        return str;
    return str.slice(0, maxLength) + '...';
}
exports.truncate = truncate;
// Convert into Camel Case
function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase()) // Capitalize letters after non-alphanumeric characters
        .replace(/^([A-Z])/, (_, chr) => chr.toLowerCase()) // Ensure the first letter is lowercase
        .trim(); // Remove leading/trailing spaces if any
}
exports.toCamelCase = toCamelCase;
;
// Convert any string to kebab-case
function toKebabCase(str) {
    return str
        .trim() // Remove leading and trailing spaces
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/_/g, '-') // Replace underscores with hyphens
        .replace(/[^a-zA-Z0-9-]/g, '') // Remove any non-alphanumeric characters except hyphens
        .toLowerCase(); // Convert all letters to lowercase
}
exports.toKebabCase = toKebabCase;
// Convert camelCase or snake_case to kebab-case
function camelAndSnaketoKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Convert camelCase to kebab-case
        .replace(/_/g, '-') // Convert snake_case to kebab-case
        .toLowerCase(); // Ensure all letters are lowercase
}
exports.camelAndSnaketoKebabCase = camelAndSnaketoKebabCase;
// Convert camelCase to snake_case
function camelToSnake(str) {
    return str
        .replace(/([A-Z])/g, '_$1') // Convert camelCase to snake_case
        .replace(/^_+/, '') // Remove leading underscores if any
        .toLowerCase();
}
exports.camelToSnake = camelToSnake;
// Convert snake_case to camelCase
function snakeToCamel(str) {
    return str.replace(/(_\w)/g, match => match[1].toUpperCase());
}
exports.snakeToCamel = snakeToCamel;
// Count occurrences of a substring
function countOccurrences(str, substring) {
    if (!str || !substring)
        return 0;
    return str.split(substring).length - 1;
}
exports.countOccurrences = countOccurrences;
