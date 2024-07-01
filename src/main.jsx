import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Componets/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-gray-50 min-h-screen">
      <div className="md:ml-36 md:mr-36 bg-white min-h-screen">
        <App />
      </div>
    </div>
  </React.StrictMode>,
)
