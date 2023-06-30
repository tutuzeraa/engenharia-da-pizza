import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from '../pages/login/index';

function isValidEmail(email) {
  const { getByLabelText } = render(<LoginForm/>);
  const emailInput = getByLabelText('email');
  return /\S+@\S+\.\S+/.test(emailInput.value);
}

describe('isValidEmailTest', () => {
  it('should return true for valid email format', () => {
    const validEmails = [
      'user@example.com',
      'john.doe@gmail.com',
      'test123@hotmail.com',
    ];

    validEmails.forEach((email) => {
      expect(isValidEmail(email)).toBe(true);
    });
  });

  it('should return false for invalid email format', () => {
    const invalidEmails = [
      'userexample.com',
      'john.doe@gmailcom',
      'test123@.com',
      'invalid-email',
    ];

    invalidEmails.forEach((email) => {
      expect(isValidEmail(email)).toBe(false);
    });
  });
});