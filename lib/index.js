"use strict";
/**
 * @umituz/react-native-validation
 *
 * Comprehensive validation utilities for React Native forms.
 * Provides reusable validation functions for common input types.
 *
 * @package react-native-validation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWithinLengthLimit = exports.containsDangerousChars = exports.sanitizeText = exports.sanitizeName = exports.sanitizePassword = exports.sanitizeEmail = exports.sanitizeWhitespace = exports.SECURITY_LIMITS = exports.batchValidate = exports.validateAge = exports.validateDateOfBirth = exports.validatePattern = exports.validateMaxLength = exports.validateMinLength = exports.validatePositiveNumber = exports.validateNumberRange = exports.validatePhone = exports.validateName = exports.validateRequired = exports.validatePasswordConfirmation = exports.validatePassword = exports.validateEmail = void 0;
// Infrastructure Layer - Validators
var validators_1 = require("./infrastructure/utils/validators");
Object.defineProperty(exports, "validateEmail", { enumerable: true, get: function () { return validators_1.validateEmail; } });
Object.defineProperty(exports, "validatePassword", { enumerable: true, get: function () { return validators_1.validatePassword; } });
Object.defineProperty(exports, "validatePasswordConfirmation", { enumerable: true, get: function () { return validators_1.validatePasswordConfirmation; } });
Object.defineProperty(exports, "validateRequired", { enumerable: true, get: function () { return validators_1.validateRequired; } });
Object.defineProperty(exports, "validateName", { enumerable: true, get: function () { return validators_1.validateName; } });
Object.defineProperty(exports, "validatePhone", { enumerable: true, get: function () { return validators_1.validatePhone; } });
Object.defineProperty(exports, "validateNumberRange", { enumerable: true, get: function () { return validators_1.validateNumberRange; } });
Object.defineProperty(exports, "validatePositiveNumber", { enumerable: true, get: function () { return validators_1.validatePositiveNumber; } });
Object.defineProperty(exports, "validateMinLength", { enumerable: true, get: function () { return validators_1.validateMinLength; } });
Object.defineProperty(exports, "validateMaxLength", { enumerable: true, get: function () { return validators_1.validateMaxLength; } });
Object.defineProperty(exports, "validatePattern", { enumerable: true, get: function () { return validators_1.validatePattern; } });
Object.defineProperty(exports, "validateDateOfBirth", { enumerable: true, get: function () { return validators_1.validateDateOfBirth; } });
Object.defineProperty(exports, "validateAge", { enumerable: true, get: function () { return validators_1.validateAge; } });
Object.defineProperty(exports, "batchValidate", { enumerable: true, get: function () { return validators_1.batchValidate; } });
// Infrastructure Layer - Sanitization
var sanitization_1 = require("./infrastructure/utils/sanitization");
Object.defineProperty(exports, "SECURITY_LIMITS", { enumerable: true, get: function () { return sanitization_1.SECURITY_LIMITS; } });
Object.defineProperty(exports, "sanitizeWhitespace", { enumerable: true, get: function () { return sanitization_1.sanitizeWhitespace; } });
Object.defineProperty(exports, "sanitizeEmail", { enumerable: true, get: function () { return sanitization_1.sanitizeEmail; } });
Object.defineProperty(exports, "sanitizePassword", { enumerable: true, get: function () { return sanitization_1.sanitizePassword; } });
Object.defineProperty(exports, "sanitizeName", { enumerable: true, get: function () { return sanitization_1.sanitizeName; } });
Object.defineProperty(exports, "sanitizeText", { enumerable: true, get: function () { return sanitization_1.sanitizeText; } });
Object.defineProperty(exports, "containsDangerousChars", { enumerable: true, get: function () { return sanitization_1.containsDangerousChars; } });
Object.defineProperty(exports, "isWithinLengthLimit", { enumerable: true, get: function () { return sanitization_1.isWithinLengthLimit; } });
