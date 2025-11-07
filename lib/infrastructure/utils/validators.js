"use strict";
/**
 * Validation Utilities
 * Comprehensive validation functions for React Native forms
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchValidate = exports.validateAge = exports.validateDateOfBirth = exports.validatePattern = exports.validateMaxLength = exports.validateMinLength = exports.validatePositiveNumber = exports.validateNumberRange = exports.validatePhone = exports.validateName = exports.validateRequired = exports.validatePasswordConfirmation = exports.validatePassword = exports.validateEmail = void 0;
/**
 * Validate email format
 */
const validateEmail = (email) => {
    if (!email || email.trim() === '') {
        return { isValid: false, error: 'Email is required' };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { isValid: false, error: 'Please enter a valid email address' };
    }
    return { isValid: true };
};
exports.validateEmail = validateEmail;
/**
 * Validate password strength
 * @param password - Password to validate
 * @param minLength - Minimum password length (default: 8)
 * @param requireUppercase - Require uppercase letter (default: true)
 * @param requireLowercase - Require lowercase letter (default: true)
 * @param requireNumber - Require number (default: true)
 */
const validatePassword = (password, options) => {
    const { minLength = 8, requireUppercase = true, requireLowercase = true, requireNumber = true, } = options || {};
    if (!password || password.trim() === '') {
        return { isValid: false, error: 'Password is required' };
    }
    if (password.length < minLength) {
        return {
            isValid: false,
            error: `Password must be at least ${minLength} characters`,
        };
    }
    if (requireUppercase && !/[A-Z]/.test(password)) {
        return {
            isValid: false,
            error: 'Password must contain at least one uppercase letter',
        };
    }
    if (requireLowercase && !/[a-z]/.test(password)) {
        return {
            isValid: false,
            error: 'Password must contain at least one lowercase letter',
        };
    }
    if (requireNumber && !/[0-9]/.test(password)) {
        return {
            isValid: false,
            error: 'Password must contain at least one number',
        };
    }
    return { isValid: true };
};
exports.validatePassword = validatePassword;
/**
 * Validate password confirmation
 */
const validatePasswordConfirmation = (password, confirmPassword) => {
    if (!confirmPassword) {
        return { isValid: false, error: 'Please confirm your password' };
    }
    if (password !== confirmPassword) {
        return { isValid: false, error: 'Passwords do not match' };
    }
    return { isValid: true };
};
exports.validatePasswordConfirmation = validatePasswordConfirmation;
/**
 * Validate required field
 */
const validateRequired = (value, fieldName = 'This field') => {
    if (!value || value.trim() === '') {
        return { isValid: false, error: `${fieldName} is required` };
    }
    return { isValid: true };
};
exports.validateRequired = validateRequired;
/**
 * Validate name
 */
const validateName = (name, fieldName = 'Name', minLength = 2) => {
    if (!name || name.trim() === '') {
        return { isValid: false, error: `${fieldName} is required` };
    }
    if (name.trim().length < minLength) {
        return {
            isValid: false,
            error: `${fieldName} must be at least ${minLength} characters`,
        };
    }
    return { isValid: true };
};
exports.validateName = validateName;
/**
 * Validate phone number (E.164 format)
 */
const validatePhone = (phone) => {
    if (!phone || phone.trim() === '') {
        return { isValid: false, error: 'Phone number is required' };
    }
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (!phoneRegex.test(phone)) {
        return { isValid: false, error: 'Please enter a valid phone number' };
    }
    return { isValid: true };
};
exports.validatePhone = validatePhone;
/**
 * Validate number range
 */
const validateNumberRange = (value, min, max, fieldName = 'Value') => {
    if (isNaN(value)) {
        return { isValid: false, error: `${fieldName} must be a number` };
    }
    if (value < min || value > max) {
        return {
            isValid: false,
            error: `${fieldName} must be between ${min} and ${max}`,
        };
    }
    return { isValid: true };
};
exports.validateNumberRange = validateNumberRange;
/**
 * Validate positive number
 */
const validatePositiveNumber = (value, fieldName = 'Value') => {
    if (isNaN(value)) {
        return { isValid: false, error: `${fieldName} must be a number` };
    }
    if (value <= 0) {
        return { isValid: false, error: `${fieldName} must be greater than 0` };
    }
    return { isValid: true };
};
exports.validatePositiveNumber = validatePositiveNumber;
/**
 * Validate min length
 */
const validateMinLength = (value, minLength, fieldName = 'Field') => {
    if (!value || value.trim().length < minLength) {
        return {
            isValid: false,
            error: `${fieldName} must be at least ${minLength} characters`,
        };
    }
    return { isValid: true };
};
exports.validateMinLength = validateMinLength;
/**
 * Validate max length
 */
const validateMaxLength = (value, maxLength, fieldName = 'Field') => {
    if (value && value.trim().length > maxLength) {
        return {
            isValid: false,
            error: `${fieldName} must be at most ${maxLength} characters`,
        };
    }
    return { isValid: true };
};
exports.validateMaxLength = validateMaxLength;
/**
 * Validate pattern (regex)
 */
const validatePattern = (value, pattern, fieldName = 'Field', errorMessage) => {
    if (!value) {
        return { isValid: false, error: `${fieldName} is required` };
    }
    if (!pattern.test(value)) {
        return {
            isValid: false,
            error: errorMessage || `${fieldName} format is invalid`,
        };
    }
    return { isValid: true };
};
exports.validatePattern = validatePattern;
/**
 * Validate date of birth
 */
const validateDateOfBirth = (date) => {
    if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
        return { isValid: false, error: 'Please enter a valid date' };
    }
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    if (age < 13) {
        return { isValid: false, error: 'You must be at least 13 years old' };
    }
    if (age > 120) {
        return { isValid: false, error: 'Please enter a valid date of birth' };
    }
    return { isValid: true };
};
exports.validateDateOfBirth = validateDateOfBirth;
/**
 * Validate age
 */
const validateAge = (age) => {
    return (0, exports.validateNumberRange)(age, 13, 120, 'Age');
};
exports.validateAge = validateAge;
/**
 * Batch validation
 * Validates multiple fields and returns all errors
 */
const batchValidate = (validations) => {
    const errors = {};
    let isValid = true;
    validations.forEach(({ field, validator }) => {
        const result = validator();
        if (!result.isValid && result.error) {
            errors[field] = result.error;
            isValid = false;
        }
    });
    return { isValid, errors };
};
exports.batchValidate = batchValidate;
