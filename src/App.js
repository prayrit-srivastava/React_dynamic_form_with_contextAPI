import React from 'react';
import FormBuilder from './Component/FormBuilder';
import { FormProvider } from './FormContext'; // Import the FormProvider

function App() {
  return (
    <div className="App">
      <h1>Dynamic Form Builder</h1>
      <FormProvider>
      <FormBuilder />
      </FormProvider>
    </div>
  );
}

export default App;
