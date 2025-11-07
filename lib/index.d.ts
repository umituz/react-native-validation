/**
 * @umituz/react-native-validation
 *
 * Comprehensive validation utilities for React Native forms.
 * Provides reusable validation functions for common input types.
 *
 * @package react-native-validation
 */
export type { ValidationResult } from './domain/entities/ValidationResult';
export { validateEmail, validatePassword, validatePasswordConfirmation, validateRequired, validateName, validatePhone, validateNumberRange, validatePositiveNumber, validateMinLength, validateMaxLength, validatePattern, validateDateOfBirth, validateAge, batchValidate, } from './infrastructure/utils/validators';
export { SECURITY_LIMITS, sanitizeWhitespace, sanitizeEmail, sanitizePassword, sanitizeName, sanitizeText, containsDangerousChars, isWithinLengthLimit, } from './infrastructure/utils/sanitization';
