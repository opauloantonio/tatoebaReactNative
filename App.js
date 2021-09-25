import React from 'react';

import App from './app/index';

import { Provider as ReduxProvider } from 'react-redux';

import { store } from './app/store';

const StoreWrapper = () => (
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
)

export default StoreWrapper;
