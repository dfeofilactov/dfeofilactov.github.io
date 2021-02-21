import React from 'react';
import { render } from 'react-dom';
import App from './App';
import firebase from '~/core/api/firebase';

firebase.init();

render(<App />, document.getElementById('root'));
