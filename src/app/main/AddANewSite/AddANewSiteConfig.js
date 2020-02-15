import React from 'react';


export const AddANewSiteConfig = {
    routes: [
        {
            path     : '/apps/AddANewSite',
            component: React.lazy(() => import('./AddANewSiteApp'))
        }
    ]
};
