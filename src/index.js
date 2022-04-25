import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FormProvider from './hooks/useFormValidation';
import './index.css';
import { addContact } from './lib/actions';
import store from './lib/store'

console.log(store.getState())
store.dispatch(addContact({ id: 1, name: 'Mbogning', email: 'mbogning.com', phone: '694144521' }))
console.log(store.getState())

ReactDOM.render(
  <FormProvider>
    <App />
  </FormProvider>,
  document.getElementById('root')
);
