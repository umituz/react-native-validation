/**
 * Sanitization Utilities
 * Secure input cleaning for user data
 */
/**
 * Security constants for input validation
 */
export declare const SECURITY_LIMITS: {
    readonly EMAIL_MAX_LENGTH: 254;
    readonly PASSWORD_MIN_LENGTH: 6;
    readonly PASSWORD_MAX_LENGTH: 128;
    readonly NAME_MAX_LENGTH: 100;
    readonly GENERAL_TEXT_MAX_LENGTH: 500;
};
/**
 * Trim and normalize whitespace
 */
export declare const sanitizeWhitespace: (input: string) => string;
/**
 * Sanitize email address
 * - Trim whitespace
 * - Convert to lowercase
 * - Limit length
 */
export declare const sanitizeEmail: (email: string) => string;
/**
 * Sanitize password
 * - Only trim (preserve case and special chars)
 * - Limit length to prevent DoS
 */
export declare const sanitizePassword: (password: string) => string;
/**
 * Sanitize display name
 * - Trim whitespace
 * - Normalize multiple spaces
 * - Remove potential XSS characters
 * - Limit length
 */
export declare const sanitizeName: (name: string) => string;
/**
 * Sanitize general text input
 * - Trim whitespace
 * - Remove HTML/script tags
 * - Limit length
 */
export declare const sanitizeText: (text: string) => string;
/**
 * Check if string contains potentially dangerous characters
 */
export declare const containsDangerousChars: (input: string) => boolean;
/**
 * Validate string length is within bounds
 */
export declare const isWithinLengthLimit: (input: string, maxLength: number, minLength?: number) => boolean;
