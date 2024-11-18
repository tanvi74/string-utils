// stringUtilsFormat.test.ts
import {
    normalize,
    slugify,
    toTitleCase,
} from '../src/i18n'; // Replace './stringUtilsFormat' with the correct path

describe('String Normalization and Formatting Utility Functions', () => {
    test('normalize: should remove accents/diacritics from text', () => {
        expect(normalize('Café')).toBe('Cafe');
        expect(normalize('naïve')).toBe('naive');
        expect(normalize('Über')).toBe('Uber');
        expect(normalize('')).toBe('');
    });

    test('slugify: should generate URL-friendly slugs from strings', () => {
        expect(slugify('Hello World!')).toBe('hello-world');
        expect(slugify('  This is a Test  ')).toBe('this-is-a-test');
        expect(slugify('Special -- Characters!!')).toBe('special-characters');
        expect(slugify('')).toBe('');
    });

    test('toTitleCase: should convert strings to Title Case', () => {
        expect(toTitleCase('hello world')).toBe('Hello World');
        expect(toTitleCase('a tale of two cities')).toBe('A Tale Of Two Cities');
        expect(toTitleCase('in the land of the rising sun')).toBe('In The Land Of The Rising Sun');
        expect(toTitleCase('')).toBe('');
    });
});
