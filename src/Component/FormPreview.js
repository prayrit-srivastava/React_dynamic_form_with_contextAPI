import React from 'react';
import { useFormPreview } from '../FormContext';

function FormPreview({handleRemoveField}) {
  const { formFields, dispatch } = useFormPreview();

  const handleFieldNameChange = (index, value) => {
    const updatedFormFields = [...formFields];
    updatedFormFields[index].name = value;
    dispatch({ type: 'SET_FORM_FIELDS', formFields: updatedFormFields });
  };

  return (
    <>
      {formFields.map((field, index) => (
        <div key={index} className="form-field">
          <input
            type="text"
            placeholder="Input Name"
            value={field.name}
            onChange={(e) => handleFieldNameChange(index, e.target.value)}
          />
          <input
            type={field.type}
            placeholder="Input Value"
            value={field.value}
            onChange={(e) => {
              const updatedFormFields = [...formFields];
              updatedFormFields[index].value = e.target.value;
              dispatch({ type: 'SET_FORM_FIELDS', formFields: updatedFormFields });
            }}
          />
          <button onClick={() => handleRemoveField(index)}>Remove</button>
        </div>
      ))}
    </>
  );
}

export default FormPreview;
