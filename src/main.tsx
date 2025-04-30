import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Make sure this import is correct
import App from './App';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>  {/* BrowserRouter should wrap the entire app */}
    <App />
  </HashRouter>
);
