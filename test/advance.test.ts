// stringUtilsExtra.test.ts
import {
    removeWhitespace,
    isPalindrome,
    wordCount,
    removeSpecialChars,
} from '../src/advance'; 

describe('Additional String Utility Functions', () => {
    test('removeWhitespace: should remove extra spaces or all whitespace', () => {
        expect(removeWhitespace('  Hello   World  ')).toBe('Hello World');
        expect(removeWhitespace('  Hello   World  ', true)).toBe('HelloWorld');
        expect(removeWhitespace('')).toBe('');
    });

    test('isPalindrome: should check if a string is a palindrome', () => {
        expect(isPalindrome('racecar')).toBe(true);
        expect(isPalindrome('RaceCar')).toBe(true); // Case insensitive
        expect(isPalindrome('A man a plan a canal Panama')).toBe(true); // Ignores spaces
        expect(isPalindrome('hello')).toBe(false);
        expect(isPalindrome('')).toBe(false);
    });

    test('wordCount: should count the number of words in a string', () => {
        expect(wordCount('Hello world')).toBe(2);
        expect(wordCount('   Multiple   spaces between words  ')).toBe(4);
        expect(wordCount('')).toBe(0);
    });

    test('removeSpecialChars: should remove special characters, keeping only alphanumeric characters', () => {
        expect(removeSpecialChars('Hello, World!')).toBe('HelloWorld');
        expect(removeSpecialChars('123_ABC!@#')).toBe('123ABC');
        expect(removeSpecialChars('')).toBe('');
    });
});
