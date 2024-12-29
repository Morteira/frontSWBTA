import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { Toaster } from 'sonner';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Toaster position="top-center" />
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
