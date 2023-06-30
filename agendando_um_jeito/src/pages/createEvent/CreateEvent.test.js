import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CreateEvent } from './createEvent';

describe('createEvent', () => {
  it('altera o numero de vagas disponiveis e lança um erro no caso de input invalido', () => {
    const { getByLabelText, getByText, queryByText } = render(<BrowserRouter><CreateEvent /></BrowserRouter>);
    const input = getByLabelText('Insira o número de vagas disponíveis');
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