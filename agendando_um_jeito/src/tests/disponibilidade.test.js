import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import "@testing-library/jest-dom";
import { AvailabilityForm } from '../pages/form/AvailabilityForm';

describe('renders AvailabilityForm component', () => {
  it("renders without crashing", () => {
    render(<BrowserRouter><AvailabilityForm/></BrowserRouter>);
  });
});