import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './localizetion/i18n.config';
import 'antd/dist/reset.css';
import {GlobalStyle} from "./assets/styles/globalStyles";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <GlobalStyle/>
      <App />
  </StrictMode>,
)
