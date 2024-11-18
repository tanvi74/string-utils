"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing functions from basic utilities
const basic_1 = require("./basic");
// Importing functions from advanced utilities
const advance_1 = require("./advance");
// Importing regex-based utilities
const regex_1 = require("./regex");
// Importing internationalization and formatting utilities
const i18n_1 = require("./i18n");
// Default export: Aggregated utility functions
exports.default = {
    // Basic utilities
    capitalize: basic_1.capitalize,
    reverse: basic_1.reverse,
    truncate: basic_1.truncate,
    toCamelCase: basic_1.toCamelCase,
    toKebabCase: basic_1.toKebabCase,
    camelAndSnaketoKebabCase: basic_1.camelAndSnaketoKebabCase,
    camelToSnake: basic_1.camelToSnake,
    snakeToCamel: basic_1.snakeToCamel,
    countOccurrences: basic_1.countOccurrences,
    // Advanced utilities
    removeSpecialChars: advance_1.removeSpecialChars,
    removeWhitespace: advance_1.removeWhitespace,
    isPalindrome: advance_1.isPalindrome,
    wordCount: advance_1.wordCount,
    // Regex utilities
    extractEmails: regex_1.extractEmails,
    extractNumbers: regex_1.extractNumbers,
    replaceAll: regex_1.replaceAll,
    // Internationalization and formatting utilities
    normalize: i18n_1.normalize,
    slugify: i18n_1.slugify,
    toTitleCase: i18n_1.toTitleCase,
};
