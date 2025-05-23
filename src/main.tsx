import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './localizetion/i18n.config';
import {GlobalStyle} from "./assets/styles/globalStyles.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <GlobalStyle/>
      <App />
  </StrictMode>,
)
