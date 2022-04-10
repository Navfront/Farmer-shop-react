import React from 'react';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);
root.render(<React.StrictMode>
  <App id="home" />
</React.StrictMode>,);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



