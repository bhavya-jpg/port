import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import LenisWrapper from './components/LenisWrapper';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LenisWrapper>
        <App />
      </LenisWrapper>
    </BrowserRouter>
  </StrictMode>
);
