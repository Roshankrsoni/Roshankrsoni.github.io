import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const MIXPANEL_TOKEN = '7c3e503458c403a0ed52158cc05aade7';

function resolveVisitorId() {
  try {
    const stored = localStorage.getItem('mixpanel_user_id');
    if (stored) return stored;
    const generated =
      typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : `user_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    localStorage.setItem('mixpanel_user_id', generated);
    return generated;
  } catch {
    return `user_${Date.now()}`;
  }
}

async function initAnalytics() {
  try {
    const { default: mixpanel } = await import('mixpanel-browser');
    mixpanel.init(MIXPANEL_TOKEN, {
      autocapture: true,
      record_sessions_percent: 0,
      persistence: 'localStorage',
    });
    const userId = resolveVisitorId();
    mixpanel.identify(userId);
    mixpanel.people.set_once({
      'First Visit': new Date().toISOString(),
      'User Type': 'Anonymous',
    });
    mixpanel.people.set({ 'Last Visit': new Date().toISOString() });
  } catch {
    /* analytics is non-essential; never surface failures to the user */
  }
}

function scheduleAnalytics() {
  let started = false;
  const start = () => {
    if (started) return;
    started = true;
    detach();
    void initAnalytics();
  };
  const detach = () => {
    for (const evt of ENGAGEMENT_EVENTS) window.removeEventListener(evt, start);
    clearTimeout(timer);
  };
  const timer = window.setTimeout(start, ENGAGEMENT_TIMEOUT);
  for (const evt of ENGAGEMENT_EVENTS) {
    window.addEventListener(evt, start, { once: true, passive: true });
  }
}

const ENGAGEMENT_EVENTS = ['pointerdown', 'keydown', 'touchstart', 'scroll'] as const;
const ENGAGEMENT_TIMEOUT = 8000;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

scheduleAnalytics();
