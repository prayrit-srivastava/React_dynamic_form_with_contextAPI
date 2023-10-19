import React, { useState } from 'react';
import './FormBuilder.css';
import FormPreview from './FormPreview';
import { useFormPreview } from '../FormContext';

function FormBuilder() {
  const { formFields, dispatch } = useFormPreview();
  const [newField, setNewField] = useState({ name: '', type: 'text', value: '' });

  const addFormField = () => {
    if (newField.name) {
      dispatch({ type: 'SET_FORM_FIELDS', formFields: [...formFields, newField] });
      setNewField({ name: '', type: 'text', value: '' });
    }
  };

  const handleRemoveField = (index) => {
    const updatedFormFields = [...formFields];
    updatedFormFields.splice(index, 1);
    dispatch({ type: 'SET_FORM_FIELDS', formFields: updatedFormFields });
  };

  return (
    <div className="form-builder">
      <div className="form-fields">
        <FormPreview handleRemoveField={handleRemoveField} />
      </div>
      <div className="new-field">
        <input
          type="text"
          data-testid = "name-input"
          placeholder="New Field Name"
          value={newField.name}
          onChange={(e) => setNewField({ ...newField, name: e.target.value })}
        />
        <select
          value={newField.type}
          data-testid = "type-input"
          onChange={(e) => setNewField({ ...newField, type: e.target.value })}
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="date">Date</option>
          <option value="email">Email</option>
        </select>
        <button onClick={addFormField}>Add Field</button>
      </div>
    </div>
  );
}

export default FormBuilder;
