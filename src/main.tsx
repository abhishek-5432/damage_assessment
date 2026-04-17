import React from 'react'
import ReactDOM from 'react-dom/client'
import { GooeyDemo } from './components/demo'
import './index.css'

ReactDOM.createRoot(document.getElementById('react-hero-root')!).render(
  <React.StrictMode>
    <GooeyDemo />
  </React.StrictMode>,
)
