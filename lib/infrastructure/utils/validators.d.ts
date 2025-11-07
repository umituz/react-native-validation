/**
 * Validation Utilities
 * Comprehensive validation functions for React Native forms
 */
import type { ValidationResult } from '../../domain/entities/ValidationResult';
/**
 * Validate email format
 */
export declare const validateEmail: (email: string) => ValidationResult;
/**
 * Validate password strength
 * @param password - Password to validate
 * @param minLength - Minimum password length (default: 8)
 * @param requireUppercase - Require uppercase letter (default: true)
 * @param requireLowercase - Require lowercase letter (default: true)
 * @param requireNumber - Require number (default: true)
 */
export declare const validatePassword: (password: string, options?: {
    minLength?: number;
    requireUppercase?: boolean;
    requireLowercase?: boolean;
    requireNumber?: boolean;
}) => ValidationResult;
/**
 * Validate password confirmation
 */
export declare const validatePasswordConfirmation: (password: string, confirmPassword: string) => ValidationResult;
/**
 * Validate required field
 */
export declare const validateRequired: (value: string, fieldName?: string) => ValidationResult;
/**
 * Validate name
 */
export declare const validateName: (name: string, fieldName?: string, minLength?: number) => ValidationResult;
/**
 * Validate phone number (E.164 format)
 */
export declare const validatePhone: (phone: string) => ValidationResult;
/**
 * Validate number range
 */
export declare const validateNumberRange: (value: number, min: number, max: number, fieldName?: string) => ValidationResult;
/**
 * Validate positive number
 */
export declare const validatePositiveNumber: (value: number, fieldName?: string) => ValidationResult;
/**
 * Validate min length
 */
export declare const validateMinLength: (value: string, minLength: number, fieldName?: string) => ValidationResult;
/**
 * Validate max length
 */
export declare const validateMaxLength: (value: string, maxLength: number, fieldName?: string) => ValidationResult;
/**
 * Validate pattern (regex)
 */
export declare const validatePattern: (value: string, pattern: RegExp, fieldName?: string, errorMessage?: string) => ValidationResult;
/**
 * Validate date of birth
 */
export declare const validateDateOfBirth: (date: Date) => ValidationResult;
/**
 * Validate age
 */
export declare const validateAge: (age: number) => ValidationResult;
/**
 * Batch validation
 * Validates multiple fields and returns all errors
 */
export declare const batchValidate: (validations: Array<{
    field: string;
    validator: () => ValidationResult;
}>) => {
    isValid: boolean;
    errors: Record<string, string>;
};
