# @umituz/react-native-validation

Comprehensive validation and sanitization utilities for React Native forms. Provides reusable validation and sanitization functions for common input types.

## Installation

```bash
npm install @umituz/react-native-validation
```

## Peer Dependencies

- `react` >= 18.2.0
- `react-native` >= 0.74.0

## Features

### Validation
- ✅ Email validation
- ✅ Password validation (with strength requirements)
- ✅ Phone number validation (E.164 format)
- ✅ Required field validation
- ✅ Name validation
- ✅ Number range validation
- ✅ Min/Max length validation
- ✅ Pattern (regex) validation
- ✅ Date of birth validation
- ✅ Age validation
- ✅ Batch validation

### Sanitization
- ✅ Email sanitization
- ✅ Password sanitization
- ✅ Name sanitization
- ✅ Text sanitization
- ✅ XSS protection
- ✅ Length limit validation
- ✅ Whitespace normalization

### General
- ✅ TypeScript type safety

## Usage

### Basic Example

```typescript
import { validateEmail, validatePassword, validateRequired } from '@umituz/react-native-validation';

// Validate email
const emailResult = validateEmail('user@example.com');
if (!emailResult.isValid) {
  console.error(emailResult.error);
}

// Validate password
const passwordResult = validatePassword('MySecure123', {
  minLength: 8,
  requireUppercase: true,
  requireLowercase: true,
  requireNumber: true,
});

// Validate required field
const requiredResult = validateRequired('value', 'Field Name');
```

### Form Validation Example

```typescript
import {
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
  validateRequired,
  batchValidate,
} from '@umituz/react-native-validation';

const validateForm = (email: string, password: string, confirmPassword: string) => {
  return batchValidate([
    { field: 'email', validator: () => validateEmail(email) },
    { field: 'password', validator: () => validatePassword(password) },
    {
      field: 'confirmPassword',
      validator: () => validatePasswordConfirmation(password, confirmPassword),
    },
  ]);
};

const result = validateForm('user@example.com', 'MySecure123', 'MySecure123');
if (!result.isValid) {
  console.log('Validation errors:', result.errors);
}
```

### Custom Validation

```typescript
import { validatePattern, validateNumberRange } from '@umituz/react-native-validation';

// Validate with custom pattern
const patternResult = validatePattern(
  'ABC123',
  /^[A-Z]{3}\d{3}$/,
  'Code',
  'Code must be 3 uppercase letters followed by 3 numbers'
);

// Validate number range
const rangeResult = validateNumberRange(50, 0, 100, 'Percentage');
```

### Sanitization Example

```typescript
import {
  sanitizeEmail,
  sanitizeName,
  sanitizeText,
  containsDangerousChars,
  SECURITY_LIMITS,
} from '@umituz/react-native-validation';

// Sanitize email
const cleanEmail = sanitizeEmail('  User@Example.COM  ');
// Result: 'user@example.com'

// Sanitize name
const cleanName = sanitizeName('  John   Doe  ');
// Result: 'John Doe'

// Sanitize text (removes HTML tags)
const cleanText = sanitizeText('<script>alert("xss")</script>Hello');
// Result: 'Hello'

// Check for dangerous characters
const isDangerous = containsDangerousChars('<script>alert("xss")</script>');
// Result: true

// Check length limits
const isValidLength = isWithinLengthLimit('text', SECURITY_LIMITS.NAME_MAX_LENGTH);
```

## API Reference

### Core Validators

- `validateEmail(email: string): ValidationResult`
- `validatePassword(password: string, options?: PasswordOptions): ValidationResult`
- `validatePasswordConfirmation(password: string, confirmPassword: string): ValidationResult`
- `validateRequired(value: string, fieldName?: string): ValidationResult`
- `validateName(name: string, fieldName?: string, minLength?: number): ValidationResult`
- `validatePhone(phone: string): ValidationResult`

### Number Validators

- `validateNumberRange(value: number, min: number, max: number, fieldName?: string): ValidationResult`
- `validatePositiveNumber(value: number, fieldName?: string): ValidationResult`

### String Validators

- `validateMinLength(value: string, minLength: number, fieldName?: string): ValidationResult`
- `validateMaxLength(value: string, maxLength: number, fieldName?: string): ValidationResult`
- `validatePattern(value: string, pattern: RegExp, fieldName?: string, errorMessage?: string): ValidationResult`

### Date Validators

- `validateDateOfBirth(date: Date): ValidationResult`
- `validateAge(age: number): ValidationResult` (13-120 years)

### Batch Validation

- `batchValidate(validations: Array<{ field: string; validator: () => ValidationResult }>): { isValid: boolean; errors: Record<string, string> }`

## Types

```typescript
interface ValidationResult {
  isValid: boolean;
  error?: string;
}

interface PasswordOptions {
  minLength?: number;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
  requireNumber?: boolean;
}
```

## License

MIT

