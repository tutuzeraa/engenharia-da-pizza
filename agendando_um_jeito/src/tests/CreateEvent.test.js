import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CreateEvent } from '../pages/createEvent/createEvent';


// Teste de valor máximo para a quantidade de vagas disponíveis
// inputs validos estão no intervalo [0,200]
// é testado portando os inputs: -1, 0, 200 e 201
describe('createEvent', () => {
  it('altera o numero de vagas disponiveis e verifica se um erro é lançado no caso de input invalido', () => {
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

// Teste de valor máximo para a data do evento
// inputs válidos são datas a partir do dia que o usuário está preenchendo o formulário
// até o dia 31/12/2099
// são testados os inputs: ontem, hoje, 31/12/2099 e 01/01/2100
describe('createEvent', () => {
  it('escolhe datas e verifica se um erro é lançado no caso de input inválido', () => {
    const { getByLabelText } = render(<BrowserRouter><CreateEvent /></BrowserRouter>);
    const handleDateChange = CreateEvent.handleDateChange; 

    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const maxDate = new Date('2099-12-31');
    const futureDate = new Date();
    futureDate.setDate(maxDate.getDate() + 1);

    const input = getByLabelText('Date:');
    fireEvent.change(input, { target: { value: today } });
    expect(handleDateChange).toHaveBeenCalledWith(today);

    fireEvent.change(input, { target: { value: yesterday } });
    expect(handleDateChange).not.toHaveBeenCalledWith(yesterday);

    fireEvent.change(input, { target: { value: maxDate } });
    expect(handleDateChange).toHaveBeenCalledWith(maxDate);

    fireEvent.change(input, { target: { value: futureDate } });
    expect(handleDateChange).not.toHaveBeenCalledWith(futureDate);
  });
});