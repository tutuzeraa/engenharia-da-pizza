import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import "@testing-library/jest-dom";
import { Events } from '../pages/form/Events';

describe('renders Events component', () => {
  it("renders without crashing", () => {
    render(<BrowserRouter><Events/></BrowserRouter>);
  });
});