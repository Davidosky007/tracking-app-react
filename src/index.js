import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Components/App';
import rootReducer from './reducers/index';
import './assets/reset.css';
import './assets/styles.css';

const state = {
  units: [],
  values: {},
  measurements: {
    Weight: [{ value: 0 }],
    Energy: [{ value: 0 }],
    'Energy burned': [{ value: 0 }],
    Sugar: [{ value: 0 }],
    Fats: [{ value: 0 }],
    Water: [{ value: 0 }],
    Protein: [{ value: 0 }],
    Carbonhydrates: [{ value: 0 }],
    'Saturated fats': [{ value: 0 }],
  },
  date: {
    day: 1,
    month: 1,
    year: 2021,
  },
  filter: 'Weight',
};

const store = createStore(rootReducer, state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
