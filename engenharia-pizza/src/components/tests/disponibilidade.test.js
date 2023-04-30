import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import "@testing-library/jest-dom";
import AvailabilityForm from '../AvailabilityForm';

jest.mock('firebase/compat/app', () => {
  return {
    firestore: jest.fn(() => {
      return {
        collection: jest.fn(() => {
          return {
            doc: jest.fn(() => {
              return {
                update: jest.fn(() => {
                  return Promise.resolve();
                })
              };
            })
          };
        })
      };
    })
  };
});

describe("RendersAvailability", () => {

  test('renders "Enter your availability" text', () => {
    render(<AvailabilityForm />);
    const availabilityText = screen.getByText(/Enter your availability/i);
    expect(availabilityText).toBeInTheDocument();
  });

  test('renders "Select your availability:" text', () => {
    render(<AvailabilityForm />);
    const selectAvailabilityText = screen.getByText(/Select your availability:/i);
    expect(selectAvailabilityText).toBeInTheDocument();
  });

  test('renders "Add" button', () => {
    render(<AvailabilityForm />);
    const addButton = screen.getByText(/Add/i);
    expect(addButton).toBeInTheDocument();
  });

  test('renders "Clear All" button when there are availabilities', () => {
    render(<AvailabilityForm />);
    const addButton = screen.getByText(/Add/i);
    fireEvent.click(addButton);
    const clearAllButton = screen.getByText(/Clear All/i);
    expect(clearAllButton).toBeInTheDocument();
  });

  test('renders "Save" button when there are availabilities', () => {
    render(<AvailabilityForm />);
    const addButton = screen.getByText(/Add/i);
    fireEvent.click(addButton);
    const saveButton = screen.getByText(/Save/i);
    expect(saveButton).toBeInTheDocument();
  });

  test('renders "Edit" button for each availability', () => {
    render(<AvailabilityForm />);
    const addButton = screen.getByText(/Add/i);
    fireEvent.click(addButton);
    const editButton = screen.getByText(/Edit/i);
    expect(editButton).toBeInTheDocument();
  });
})


describe("ButtonsWorking", () => {
  test('submitting form with valid date and time adds availability', () => {
    const { getByText, getByLabelText } = render(<AvailabilityForm />);
    const dateTimePickerElement = getByText(/Date and time/i);
    const addButtonElement = getByText(/Add/i);
    const expectedDateTime = '2023-05-01T10:00:00.000Z';
  
    // Set date and time
    fireEvent.change(dateTimePickerElement, { target: { value: expectedDateTime } });
  
    // Submit form
    fireEvent.click(addButtonElement);
  
    // Verify that availability was added to the list
    const availabilityElement = getByText(/10:00 AM/i);
    expect(availabilityElement).toBeInTheDocument();
  });
//   test('clicking "Clear All" button removes all availabilities', () => {
//     render(<AvailabilityForm />);
//     const addButton = screen.getByText(/Add/i);
//     fireEvent.click(addButton);
//     const clearAllButton = screen.getByText(/Clear All/i);
//     fireEvent.click(clearAllButton);
//     const noAvailabilityText = screen.getByText(/You have no availability/i);
//     expect(noAvailabilityText).toBeInTheDocument();
//   });

//   test('clicking "Save" button saves the availabilities to Firestore', () => {
//     // mock the Firestore update method
//     const firestoreUpdateMock = jest.fn();
//     const firestoreMock = {
//       collection: () => ({
//         doc: () => ({
//           update: firestoreUpdateMock,
//         }),
//       }),
//     };
//     jest.mock('firebase/compat/app', () => ({
//       firestore: () => firestoreMock,
//     }));

//     render(<AvailabilityForm />);
//     const addButton = screen.getByText(/Add/i);
//     fireEvent.click(addButton);
//     const saveButton = screen.getByText(/Save/i);
//     fireEvent.click(saveButton);
//     expect(firestoreUpdateMock).toHaveBeenCalled();
//   });

})