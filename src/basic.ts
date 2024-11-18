// Capitalize the first letter of a string
function capitalize(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Reverse the string
function reverse(str: string): string {
    if (!str) return '';
    return str.split('').reverse().join('');
}

// Truncate the string
function truncate(str: string, maxLength: number): string {
    if (!str || str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
}

// Convert into Camel Case
function toCamelCase(str: string): string{
    return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase()) // Capitalize letters after non-alphanumeric characters
    .replace(/^([A-Z])/, (_, chr) => chr.toLowerCase()) // Ensure the first letter is lowercase
    .trim(); // Remove leading/trailing spaces if any

};

// Convert any string to kebab-case
function toKebabCase(str: string): string {
    return str
        .trim()                     // Remove leading and trailing spaces
        .replace(/\s+/g, '-')       // Replace spaces with hyphens
        .replace(/_/g, '-')         // Replace underscores with hyphens
        .replace(/[^a-zA-Z0-9-]/g, '') // Remove any non-alphanumeric characters except hyphens
        .toLowerCase();             // Convert all letters to lowercase
}

// Convert camelCase or snake_case to kebab-case
function camelAndSnaketoKebabCase(str: string): string {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')  // Convert camelCase to kebab-case
        .replace(/_/g, '-')                   // Convert snake_case to kebab-case
        .toLowerCase();                      // Ensure all letters are lowercase
}

// Convert camelCase to snake_case
function camelToSnake(str: string): string {
    return str
    .replace(/([A-Z])/g, '_$1')          // Convert camelCase to snake_case
    .replace(/^_+/, '')                 // Remove leading underscores if any
    .toLowerCase();  
}

// Convert snake_case to camelCase
function snakeToCamel(str: string): string {
    return str.replace(/(_\w)/g, match => match[1].toUpperCase());
}

// Count occurrences of a substring
function countOccurrences(str: string, substring: string): number {
    if (!str || !substring) return 0;
    return str.split(substring).length - 1;
}

// Export the functions
export {
    capitalize,
    reverse,
    truncate,
    toCamelCase,
    toKebabCase,
    camelAndSnaketoKebabCase,
    camelToSnake,
    snakeToCamel,
    countOccurrences
};
