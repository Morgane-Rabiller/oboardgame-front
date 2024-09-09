import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/mdc-light-deeppurple/theme.css";
// import "primereact/resources/themes/mdc-dark-indigo/theme.css";
// import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import store from "./store";
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
