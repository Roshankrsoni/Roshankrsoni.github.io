import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import mixpanel from 'mixpanel-browser';

mixpanel.init('7c3e503458c403a0ed52158cc05aade7', {
  autocapture: true,
  record_sessions_percent: 100,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
