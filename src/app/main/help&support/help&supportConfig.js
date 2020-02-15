import React from 'react';


export const helpAndSupportConfig = {
    routes: [
        {
            path     : '/apps/help&support',
            component: React.lazy(() => import('./help&supportApp'))
        }
    ]
};
