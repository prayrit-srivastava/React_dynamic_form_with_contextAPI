import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import App from './App';

test('Adding multiple form fields', () => {
  const { getByText, getByTestId,getByPlaceholderText } = render(
    <App/>
  );
  const nameInput = getByTestId('name-input');
  const typeInput = getByTestId('type-input');
  const addButton = getByText('Add Field');
  fireEvent.change(nameInput, { target: { value: 'New Field' } });
  fireEvent.change(typeInput, { target: { value: 'number' } });
  fireEvent.click(addButton);
  const input1 = getByPlaceholderText('Input Name');
//   console.log(input1)
  expect(input1.value).toBe('New Field');
});
test('Removing a form field', () => {
        const { getByTestId, getByPlaceholderText, getByText } = render(<App />);
      
        // Add a new field
        const nameInput = getByTestId('name-input');
        const typeInput = getByTestId('type-input');
        const addButton = getByText('Add Field');
      
        fireEvent.change(nameInput, { target: { value: 'New Field' } });
        fireEvent.change(typeInput, { target: { value: 'number' } });
        fireEvent.click(addButton);
      
        // Check if the new field is added
        const addedInput = getByPlaceholderText('Input Name');
        
        // Remove the added field
        const removeButton = getByText('Remove');
        fireEvent.click(removeButton);
      
        expect(() => getByPlaceholderText('Input Name')).toThrow(); // Expect to throw an error
      
        // expect(removedInput).toBeNull();
  });

