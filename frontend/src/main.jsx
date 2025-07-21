import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Home() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    api.get('/ping').then(r => setMsg(r.data.message));
  }, []);

  return <h1>Respuesta backend: {msg}</h1>;
}
