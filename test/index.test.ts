import stringUtils from '../src/index';

describe('stringUtils: Combined utility functions', () => {
    test('capitalize: should capitalize the first letter of a string', () => {
        expect(stringUtils.capitalize('hello')).toBe('Hello');
        expect(stringUtils.capitalize('')).toBe('');
    });

    test('reverse: should reverse the string', () => {
        expect(stringUtils.reverse('hello')).toBe('olleh');
        expect(stringUtils.reverse('')).toBe('');
    });

    test('truncate: should truncate the string to the specified length', () => {
        expect(stringUtils.truncate('hello world', 5)).toBe('hello...');
        expect(stringUtils.truncate('short', 10)).toBe('short');
    });

    test('toCamelCase: should convert strings to camelCase', () => {
        expect(stringUtils.toCamelCase('hello world')).toBe('helloWorld');
        expect(stringUtils.toCamelCase('Camel_case_example')).toBe('camelCaseExample');
    });

    test('toKebabCase: should convert strings to kebab-case', () => {
        expect(stringUtils.toKebabCase('Hello World')).toBe('hello-world');
        expect(stringUtils.toKebabCase('example_test_case')).toBe('example-test-case');
    });

    test('camelAndSnaketoKebabCase: should convert camelCase and snake_case to kebab-case', () => {
        expect(stringUtils.camelAndSnaketoKebabCase('camelCase')).toBe('camel-case');
        expect(stringUtils.camelAndSnaketoKebabCase('snake_case')).toBe('snake-case');
    });

    test('camelToSnake: should convert camelCase to snake_case', () => {
        expect(stringUtils.camelToSnake('camelCase')).toBe('camel_case');
    });

    test('snakeToCamel: should convert snake_case to camelCase', () => {
        expect(stringUtils.snakeToCamel('snake_case')).toBe('snakeCase');
    });

    test('countOccurrences: should count occurrences of a substring', () => {
        expect(stringUtils.countOccurrences('hello hello world', 'hello')).toBe(2);
    });

    test('removeSpecialChars: should remove special characters from the string', () => {
        expect(stringUtils.removeSpecialChars('hello@world!')).toBe('helloworld');
    });

    test('removeWhitespace: should remove extra spaces or all whitespace', () => {
        expect(stringUtils.removeWhitespace('  hello   world  ')).toBe('hello world');
        expect(stringUtils.removeWhitespace('  hello   world  ', true)).toBe('helloworld');
    });

    test('isPalindrome: should check if a string is a palindrome', () => {
        expect(stringUtils.isPalindrome('Racecar')).toBe(true);
        expect(stringUtils.isPalindrome('hello')).toBe(false);
    });

    test('wordCount: should count the number of words in a string', () => {
        expect(stringUtils.wordCount('hello world')).toBe(2);
    });

    test('extractEmails: should extract all email addresses from a string', () => {
        expect(stringUtils.extractEmails('Contact: test@example.com')).toEqual(['test@example.com']);
    });

    test('extractNumbers: should extract all numbers from a string', () => {
        expect(stringUtils.extractNumbers('Order 123 for $456')).toEqual([123, 456]);
    });

    test('replaceAll: should replace all occurrences of a substring', () => {
        expect(stringUtils.replaceAll('foo bar foo', 'foo', 'baz')).toBe('baz bar baz');
    });

    test('normalize: should remove accents/diacritics from text', () => {
        expect(stringUtils.normalize('Café')).toBe('Cafe');
    });

    test('slugify: should generate URL-friendly slugs from strings', () => {
        expect(stringUtils.slugify('Hello World!')).toBe('hello-world');
    });

    test('toTitleCase: should convert strings to Title Case', () => {
        expect(stringUtils.toTitleCase('a tale of two cities')).toBe('A Tale Of Two Cities');
    });
});
