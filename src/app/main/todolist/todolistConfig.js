import React from 'react';


export const todolistConfig = {
    routes: [
        {
            path: '/apps/todolist',
            component: React.lazy(() => import('./todolistApp'))
        }
    ]
};
