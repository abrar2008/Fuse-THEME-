import React from 'react';


export const settingsConfig = {
    routes: [
        {
            path: '/apps/settings',
            component: React.lazy(() => import('./settingsApp'))
        }
    ]
};
