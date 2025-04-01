import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Main from './App'
import App from './App.jsx'
// import Card from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Main /> */}
    <App />
    {/* <Card /> */}
  </StrictMode>,
)
