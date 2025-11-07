"use strict";
/**
 * Sanitization Utilities
 * Secure input cleaning for user data
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWithinLengthLimit = exports.containsDangerousChars = exports.sanitizeText = exports.sanitizeName = exports.sanitizePassword = exports.sanitizeEmail = exports.sanitizeWhitespace = exports.SECURITY_LIMITS = void 0;
/**
 * Security constants for input validation
 */
exports.SECURITY_LIMITS = {
    EMAIL_MAX_LENGTH: 254, // RFC 5321
    PASSWORD_MIN_LENGTH: 6,
    PASSWORD_MAX_LENGTH: 128,
    NAME_MAX_LENGTH: 100,
    GENERAL_TEXT_MAX_LENGTH: 500,
};
/**
 * Trim and normalize whitespace
 */
const sanitizeWhitespace = (input) => {
    return input.trim().replace(/\s+/g, ' ');
};
exports.sanitizeWhitespace = sanitizeWhitespace;
/**
 * Sanitize email address
 * - Trim whitespace
 * - Convert to lowercase
 * - Limit length
 */
const sanitizeEmail = (email) => {
    const trimmed = email.trim().toLowerCase();
    return trimmed.substring(0, exports.SECURITY_LIMITS.EMAIL_MAX_LENGTH);
};
exports.sanitizeEmail = sanitizeEmail;
/**
 * Sanitize password
 * - Only trim (preserve case and special chars)
 * - Limit length to prevent DoS
 */
const sanitizePassword = (password) => {
    // Don't trim password to preserve intentional spaces
    // Only limit length
    return password.substring(0, exports.SECURITY_LIMITS.PASSWORD_MAX_LENGTH);
};
exports.sanitizePassword = sanitizePassword;
/**
 * Sanitize display name
 * - Trim whitespace
 * - Normalize multiple spaces
 * - Remove potential XSS characters
 * - Limit length
 */
const sanitizeName = (name) => {
    const trimmed = (0, exports.sanitizeWhitespace)(name);
    // Remove HTML tags and script content
    const noTags = trimmed.replace(/<[^>]*>/g, '');
    return noTags.substring(0, exports.SECURITY_LIMITS.NAME_MAX_LENGTH);
};
exports.sanitizeName = sanitizeName;
/**
 * Sanitize general text input
 * - Trim whitespace
 * - Remove HTML/script tags
 * - Limit length
 */
const sanitizeText = (text) => {
    const trimmed = (0, exports.sanitizeWhitespace)(text);
    const noTags = trimmed.replace(/<[^>]*>/g, '');
    return noTags.substring(0, exports.SECURITY_LIMITS.GENERAL_TEXT_MAX_LENGTH);
};
exports.sanitizeText = sanitizeText;
/**
 * Check if string contains potentially dangerous characters
 */
const containsDangerousChars = (input) => {
    // Check for common XSS patterns
    const dangerousPatterns = [
        /<script/i,
        /javascript:/i,
        /on\w+\s*=/i, // onclick, onload, etc.
        /<iframe/i,
        /eval\(/i,
    ];
    return dangerousPatterns.some(pattern => pattern.test(input));
};
exports.containsDangerousChars = containsDangerousChars;
/**
 * Validate string length is within bounds
 */
const isWithinLengthLimit = (input, maxLength, minLength = 0) => {
    const length = input.trim().length;
    return length >= minLength && length <= maxLength;
};
exports.isWithinLengthLimit = isWithinLengthLimit;
