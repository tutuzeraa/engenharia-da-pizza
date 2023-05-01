
import { render, screen, fireEvent } from '@testing-library/react';
import index from '../pages/register/index';
import React from 'react';

describe("Register component", () => {
  it("renders without crashing", () => {
    render(<index />);
  });
});

// describe('Register component', () => {
//   it('should render correctly', () => {
//     render(<Register />);
//     const emailInput = screen.getByLabelText('E-Mail');
//     const passwordInput = screen.getByLabelText('Password');
//     const registerButton = screen.getByRole('button', { name: 'Cadastrar' });
//     expect(emailInput).toBeInTheDocument();
//     expect(passwordInput).toBeInTheDocument();
//     expect(registerButton).toBeInTheDocument();
//   });

//   it('should call createUserWithEmailAndPassword when the form is submitted', () => {
//     const mockCreateUserWithEmailAndPassword = jest.fn();
//     jest.mock('react-firebase-hooks/auth', () => ({
//       useCreateUserWithEmailAndPassword: () => [
//         mockCreateUserWithEmailAndPassword,
//         null,
//         false,
//         null,
//       ],
//     }));
//     render(<Register />);
//     const emailInput = screen.getByLabelText('E-Mail');
//     const passwordInput = screen.getByLabelText('Password');
//     const registerButton = screen.getByRole('button', { name: 'Cadastrar' });
//     fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
//     fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
//     fireEvent.click(registerButton);
//     expect(mockCreateUserWithEmailAndPassword).toHaveBeenCalledWith(
//       'test@test.com',
//       'testpassword'
//     );
//   });
// });