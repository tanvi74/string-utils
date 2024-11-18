// stringUtils.test.ts
import {
    capitalize,
    reverse,
    truncate,
    toCamelCase,
    toKebabCase,
    camelAndSnaketoKebabCase,
    camelToSnake,
    snakeToCamel,
    countOccurrences,
} from '../src/basic'; 

describe('String Utility Functions', () => {
    test('capitalize: should capitalize the first letter of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('Hello')).toBe('Hello');
        expect(capitalize('')).toBe('');
    });

    test('reverse: should reverse the string', () => {
        expect(reverse('hello')).toBe('olleh');
        expect(reverse('')).toBe('');
    });

    test('truncate: should truncate the string to the specified length', () => {
        expect(truncate('hello world', 5)).toBe('hello...');
        expect(truncate('short', 10)).toBe('short');
        expect(truncate('', 5)).toBe('');
    });

    test('toCamelCase: should convert strings to camelCase', () => {
        expect(toCamelCase('hello world')).toBe('helloWorld');
        expect(toCamelCase('HELLO_WORLD')).toBe('helloWorld');
        expect(toCamelCase('  camel_case-test ')).toBe('camelCaseTest');
    });

    test('toKebabCase: should convert strings to kebab-case', () => {
        expect(toKebabCase('Hello World')).toBe('hello-world');
        expect(toKebabCase('  kebab_case Test  ')).toBe('kebab-case-test');
        expect(toKebabCase('special#chars!')).toBe('specialchars');
    });

    test('camelAndSnaketoKebabCase: should convert camelCase and snake_case to kebab-case', () => {
        expect(camelAndSnaketoKebabCase('camelCase')).toBe('camel-case');
        expect(camelAndSnaketoKebabCase('snake_case')).toBe('snake-case');
    });

    test('camelToSnake: should convert camelCase to snake_case', () => {
        expect(camelToSnake('camelCase')).toBe('camel_case');
        expect(camelToSnake('CamelCaseExample')).toBe('camel_case_example');
    });

    test('snakeToCamel: should convert snake_case to camelCase', () => {
        expect(snakeToCamel('snake_case')).toBe('snakeCase');
        expect(snakeToCamel('example_test_case')).toBe('exampleTestCase');
    });

    test('countOccurrences: should count occurrences of a substring', () => {
        expect(countOccurrences('hello world hello', 'hello')).toBe(2);
        expect(countOccurrences('hello world', 'test')).toBe(0);
        expect(countOccurrences('', 'test')).toBe(0);
    });
});
