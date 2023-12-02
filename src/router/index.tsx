import { createBrowserRouter } from 'react-router-dom';

import App from '@/App.tsx';
import Game from "@/pages/game.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Game />,
        // loader: rootLoader,
    },
    {
        path: '/',
        element: <App />,
        // loader: rootLoader,
    },
]);
export default router;
