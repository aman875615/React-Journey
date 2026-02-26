import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NAvbar from './component/NAvbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NAvbar />
  </StrictMode>,
)
 