import React from 'react';


export const AboutUsConfig = {
    routes: [
        {
            path: '/apps/aboutus',
            component: React.lazy(() => import('./AboutUsApp'))
        }
    ]
};
