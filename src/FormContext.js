import React, { createContext, useContext, useReducer } from 'react';

const initialState = [];

const FormContext = createContext();

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FORM_FIELDS':
      return action.formFields;
    default:
      return state;
  }
};

function FormProvider({ children }) {
  const [formFields, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ formFields, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

function useFormPreview() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormPreview must be used within a FormProvider');
  }
  return context;
}

export { FormProvider, useFormPreview };
