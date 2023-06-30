import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import createEvent from './createEvent';

describe('createEvent', () => {
  it('should update vacancies state and display an error message for invalid input', () => {
    const { getByLabelText, getByText, queryByText } = render(<createEvent />);
    const input = getByLabelText('Vacancies:');
    fireEvent.change(input, { target: { value: '-1' } });
    expect(input.value).toBe('-1');
    expect(getByText('Vacancies must be between 0 and 200')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '0' } });
    expect(input.value).toBe('0');
    expect(queryByText('Vacancies must be between 0 and 200')).toBeNull();

    fireEvent.change(input, { target: { value: '200' } });
    expect(input.value).toBe('200');
    expect(queryByText('Vacancies must be between 0 and 200')).toBeNull();

    fireEvent.change(input, { target: { value: '201' } });
    expect(input.value).toBe('201');
    expect(getByText('Vacancies must be between 0 and 200')).toBeInTheDocument();
  });
});


// testes de Valor Limite no componente createEvent.jsx