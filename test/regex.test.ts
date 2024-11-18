import {
    extractEmails,
    extractNumbers,
    replaceAll,
} from '../src/regex'; 

describe('String Extraction and Replacement Utility Functions', () => {
    test('extractEmails: should extract all email addresses from a string', () => {
        expect(extractEmails('Contact us at support@example.com and sales@example.org')).toEqual([
            'support@example.com',
            'sales@example.org',
        ]);
        expect(extractEmails('No emails here')).toEqual([]);
        expect(extractEmails('user.name+tag@domain.co')).toEqual(['user.name+tag@domain.co']);
    });

    test('extractNumbers: should extract all numbers from a string', () => {
        expect(extractNumbers('Order 123 for $456')).toEqual([123, 456]);
        expect(extractNumbers('No numbers here')).toEqual([]);
        expect(extractNumbers('Numbers: 007, 42, and 1000')).toEqual([7, 42, 1000]);
    });

    test('replaceAll: should replace all occurrences of a substring', () => {
        expect(replaceAll('foo bar foo', 'foo', 'baz')).toBe('baz bar baz');
        expect(replaceAll('hello world', 'world', 'universe')).toBe('hello universe');
        expect(replaceAll('nothing to replace', 'missing', 'found')).toBe('nothing to replace');
    });
});
