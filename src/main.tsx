import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import mixpanel from 'mixpanel-browser';

mixpanel.init('7c3e503458c403a0ed52158cc05aade7', {
  autocapture: true,
  record_sessions_percent: 100,
});

// Generate or retrieve a unique user ID
let userId = localStorage.getItem('mixpanel_user_id');
if (!userId) {
  // Use crypto.randomUUID if available, otherwise fallback to a unique string
  userId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  localStorage.setItem('mixpanel_user_id', userId);
}

// Uniquely identify the user in Mixpanel
mixpanel.identify(userId);

// Set up Mixpanel profile properties
mixpanel.people.set_once({
  'First Visit': new Date().toISOString(),
  'User Type': 'Anonymous'
});

mixpanel.people.set({
  'Last Visit': new Date().toISOString()
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
