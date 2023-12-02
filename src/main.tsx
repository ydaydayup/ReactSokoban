import React from 'react';
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line import/order
import './styles/index.css';

import { RouterProvider } from 'react-router';

import router from '@/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* <App /> */}

        <RouterProvider router={router} />
    </React.StrictMode>,
);
