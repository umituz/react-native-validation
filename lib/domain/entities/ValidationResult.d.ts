/**
 * Validation Result Entity
 * Standard return type for all validation functions
 */
export interface ValidationResult {
    isValid: boolean;
    error?: string;
}
