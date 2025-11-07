/**
 * Validation Utilities
 * Comprehensive validation functions for React Native forms
 */

import type { ValidationResult } from '../../domain/entities/ValidationResult';

/**
 * Validate email format
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email || email.trim() === '') {
    return { isValid: false, error: 'Email is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  return { isValid: true };
};

/**
 * Validate password strength
 * @param password - Password to validate
 * @param minLength - Minimum password length (default: 8)
 * @param requireUppercase - Require uppercase letter (default: true)
 * @param requireLowercase - Require lowercase letter (default: true)
 * @param requireNumber - Require number (default: true)
 */
export const validatePassword = (
  password: string,
  options?: {
    minLength?: number;
    requireUppercase?: boolean;
    requireLowercase?: boolean;
    requireNumber?: boolean;
  }
): ValidationResult => {
  const {
    minLength = 8,
    requireUppercase = true,
    requireLowercase = true,
    requireNumber = true,
  } = options || {};

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

/**
 * Validate password confirmation
 */
export const validatePasswordConfirmation = (
  password: string,
  confirmPassword: string
): ValidationResult => {
  if (!confirmPassword) {
    return { isValid: false, error: 'Please confirm your password' };
  }

  if (password !== confirmPassword) {
    return { isValid: false, error: 'Passwords do not match' };
  }

  return { isValid: true };
};

/**
 * Validate required field
 */
export const validateRequired = (
  value: string,
  fieldName: string = 'This field'
): ValidationResult => {
  if (!value || value.trim() === '') {
    return { isValid: false, error: `${fieldName} is required` };
  }

  return { isValid: true };
};

/**
 * Validate name
 */
export const validateName = (
  name: string,
  fieldName: string = 'Name',
  minLength: number = 2
): ValidationResult => {
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

/**
 * Validate phone number (E.164 format)
 */
export const validatePhone = (phone: string): ValidationResult => {
  if (!phone || phone.trim() === '') {
    return { isValid: false, error: 'Phone number is required' };
  }

  const phoneRegex = /^\+[1-9]\d{1,14}$/;
  if (!phoneRegex.test(phone)) {
    return { isValid: false, error: 'Please enter a valid phone number' };
  }

  return { isValid: true };
};

/**
 * Validate number range
 */
export const validateNumberRange = (
  value: number,
  min: number,
  max: number,
  fieldName: string = 'Value'
): ValidationResult => {
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

/**
 * Validate positive number
 */
export const validatePositiveNumber = (
  value: number,
  fieldName: string = 'Value'
): ValidationResult => {
  if (isNaN(value)) {
    return { isValid: false, error: `${fieldName} must be a number` };
  }

  if (value <= 0) {
    return { isValid: false, error: `${fieldName} must be greater than 0` };
  }

  return { isValid: true };
};

/**
 * Validate min length
 */
export const validateMinLength = (
  value: string,
  minLength: number,
  fieldName: string = 'Field'
): ValidationResult => {
  if (!value || value.trim().length < minLength) {
    return {
      isValid: false,
      error: `${fieldName} must be at least ${minLength} characters`,
    };
  }

  return { isValid: true };
};

/**
 * Validate max length
 */
export const validateMaxLength = (
  value: string,
  maxLength: number,
  fieldName: string = 'Field'
): ValidationResult => {
  if (value && value.trim().length > maxLength) {
    return {
      isValid: false,
      error: `${fieldName} must be at most ${maxLength} characters`,
    };
  }

  return { isValid: true };
};

/**
 * Validate pattern (regex)
 */
export const validatePattern = (
  value: string,
  pattern: RegExp,
  fieldName: string = 'Field',
  errorMessage?: string
): ValidationResult => {
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

/**
 * Validate date of birth
 */
export const validateDateOfBirth = (date: Date): ValidationResult => {
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

/**
 * Validate age
 */
export const validateAge = (age: number): ValidationResult => {
  return validateNumberRange(age, 13, 120, 'Age');
};

/**
 * Batch validation
 * Validates multiple fields and returns all errors
 */
export const batchValidate = (
  validations: Array<{ field: string; validator: () => ValidationResult }>
): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};
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

