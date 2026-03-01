
import { createRoot } from 'react-dom/client'
import './Index.css'
import App from './App'
export const TempApp = () => <h1 style={{color: 'red', padding: '50px'}}>¡VITE FUNCIONA!</h1>
createRoot(document.getElementById('root')!).render(<App />)
