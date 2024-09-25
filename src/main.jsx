import { StrictMode } from 'react'; // Este modo solo se aplica en desarrollo
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
)
