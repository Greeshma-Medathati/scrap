import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './MemoryLane.jsx'
import './index.css' // This is the most important line for your styles!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)