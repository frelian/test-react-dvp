import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import UserApp from './UserApp.jsx';
import './assets/styles/global.css';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserApp />
    </BrowserRouter>,
)
