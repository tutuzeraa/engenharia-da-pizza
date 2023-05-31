import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import index from '../pages/login/index';

describe("Login component", () => {
  it("renders without crashing", () => {
    render(<index />);
  });
});
// describe('Login', () => {
//   it('submits the login form with email and password', () => {
//     const { getByLabelText, getByRole } = render(<Login />);

//     // Fill in the email and password fields
//     const emailInput = getByLabelText('Email');
//     const passwordInput = getByLabelText('Password');
//     fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
//     fireEvent.change(passwordInput, { target: { value: 'password123' } });

//     // Submit the form
//     const submitButton = getByRole('button', { name: 'Login' });
//     fireEvent.click(submitButton);

//     // Check that the form was submitted with the correct values
//     expect(emailInput.value).toBe('test@example.com');
//     expect(passwordInput.value).toBe('password123');
//   });
// });