# string-utilss

A collection of useful string manipulation functions for JavaScript/TypeScript. The library provides simple utilities for converting, formatting, and manipulating strings, such as converting between camelCase, kebab-case, snake_case, title case, and more.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the package, use npm:

```bash
npm install string-utils
```

## Usage

You can import the functions you need and use them as follows:

```bash
import { 
    capitalize,
    reverse,
    truncate,
    toCamelCase,
    toKebabCase,
    camelToSnake,
    snakeToCamel,
    countOccurrences,
    removeWhitespace,
    isPalindrome,
    wordCount,
    extractEmails,
    extractNumbers,
    replaceAll,
    normalize,
    slugify,
    toTitleCase
} from 'string-utils';

// Example usage
const result = toCamelCase('hello world'); 
console.log(result); // Output: 'helloWorld'
```

## Functions

## Basic String Operations

## `capitalize(str: string): string`
Capitalizes the first letter of the string.

## `reverse(str: string): string`
Reverses the string.

## `truncate(str: string, maxLength: number): string`
Truncates the string to a specified length, adding `...` if necessary.

## `toCamelCase(str: string): string`
Converts a string to `camelCase`.

## `toKebabCase(str: string): string`
Converts a string to `kebab-case` (hyphenated lowercase words).

## `camelToSnake(str: string): string`
Converts a `camelCase` string to `snake_case`.

## `snakeToCamel(str: string): string`
Converts a `snake_case` string to `camelCase`.

## `countOccurrences(str: string, substring: string): number`
Counts the occurrences of a substring within a string.

---

## Advanced String Operations

## `removeWhitespace(str: string, removeAll: boolean): string`
Removes all whitespace or reduces multiple spaces to a single space.
- `removeAll = true`: removes all whitespace characters.
- `removeAll = false`: replaces multiple spaces with a single space.

## `isPalindrome(str: string): boolean`
Checks if a string is a palindrome (reads the same forwards and backwards).

## `wordCount(str: string): number`
Counts the number of words in a string.

## `removeSpecialChars(str: string): string`
Removes all non-alphanumeric characters from the string.

---

## Regex-Based Operations

## `extractEmails(str: string): string[]`
Extracts all email addresses from a string.

## `extractNumbers(str: string): number[]`
Extracts all numbers from a string.

## `replaceAll(str: string, search: string, replacement: string): string`
Replaces all occurrences of a substring with a replacement string.

---

## Internationalization (i18n) Utilities

## `normalize(str: string): string`
Normalizes accented characters to their base form (removes diacritical marks).

## `slugify(str: string): string`
Converts a string into a URL-friendly slug (lowercase with hyphens).

## `toTitleCase(str: string): string`
Converts a string to Title Case (capitalizes the first letter of each word).


## Contributing

We welcome contributions! To contribute, please follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top of this repository page to create a copy under your GitHub account.
2. **Clone your fork**: Clone the repository to your local machine.
   ```bash
   git clone https://github.com/your-username/string-utils.git
   ```


## License

This project is licensed under the MIT License
