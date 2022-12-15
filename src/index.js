import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/scss/main.scss';

import { Provider } from 'react-redux';
import { store } from './redux/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}></Provider>);
