import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import index from '../pages/login/index';

function isValidEmail(index) {
    const { getByLabelText, getByText } = render(<LoginForm />);
    const emailInput = getByLabelText('email');
    return /\S+@\S+\.\S+/.test(emailInput);
  }

describe('isValidEmail', () => {
    it('should return true for valid email format', () => {
      const validEmails = [
        'user@example.com',
        'john.doe@gmail.com',
        'test123@hotmail.com',
      ];
  
      validEmails.forEach((index) => {
        expect(isValidEmail(index)).toBe(true);
      });
    });
  
    it('should return false for invalid email format', () => {
      const invalidEmails = [
        'userexample.com',
        'john.doe@gmailcom',
        'test123@.com',
        'invalid-email',
      ];
  
      invalidEmails.forEach((index) => {
        expect(isValidEmail(index)).toBe(false);
      });
    });
  });
  