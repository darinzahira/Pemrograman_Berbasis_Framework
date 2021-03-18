import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PendataanMhs from "./container/PendataanMhs/PendataanMhs";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(<PendataanMhs />, document.getElementById('content'));

serviceWorker.unregister();