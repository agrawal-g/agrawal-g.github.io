import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Make sure this import is correct
import App from './App';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>  {/* BrowserRouter should wrap the entire app */}
    <App />
  </BrowserRouter>
);
