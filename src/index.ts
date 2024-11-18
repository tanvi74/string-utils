// Importing functions from basic utilities
import { 
    capitalize,
    reverse,
    truncate,
    toCamelCase,
    toKebabCase,
    camelAndSnaketoKebabCase,
    camelToSnake,
    snakeToCamel,
    countOccurrences
} from './basic';

// Importing functions from advanced utilities
import {
    removeSpecialChars,
    removeWhitespace,
    isPalindrome,
    wordCount
} from './advance';

// Importing regex-based utilities
import {
    extractEmails,
    extractNumbers,
    replaceAll
} from './regex';

// Importing internationalization and formatting utilities
import {
    normalize,
    slugify,
    toTitleCase,
} from './i18n';

// Default export: Aggregated utility functions
export default {
    // Basic utilities
    capitalize,
    reverse,
    truncate,
    toCamelCase,
    toKebabCase,
    camelAndSnaketoKebabCase,
    camelToSnake,
    snakeToCamel,
    countOccurrences,

    // Advanced utilities
    removeSpecialChars,
    removeWhitespace,
    isPalindrome,
    wordCount,

    // Regex utilities
    extractEmails,
    extractNumbers,
    replaceAll,

    // Internationalization and formatting utilities
    normalize,
    slugify,
    toTitleCase,
};
