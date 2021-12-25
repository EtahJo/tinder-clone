import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-web-vector-icons/fonts';
import {GlobalStyles} from "./global-styles.js"


ReactDOM.render(<><GlobalStyles/>
 <App/> </>,
  document.getElementById('root')
);

