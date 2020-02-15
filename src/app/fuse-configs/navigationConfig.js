import {MaterialUIComponentsNavigation} from 'app/main/documentation/material-ui-components/MaterialUIComponentsNavigation';
import {authRoles} from 'app/auth';

const navigationConfig = [
  {
      'id'      : 'applications',
      'title'   : 'Applications',
      'type'    : 'group',
      'icon'    : 'apps',
      'children': [
          {
              'id'      : 'dashboards',
              'title'   : 'Projects',
              'type'    : 'collapse',
              'icon'    : 'dashboard',
              'children': [
                  {
                      'id'   : 'analytics-dashboard',
                      'title': 'Analytics',
                      'type' : 'item',
                      'url'  : '/apps/dashboards/analytics'
                  },
                  {
                      'id'   : 'project-dashboard',
                      'title': 'Violations Report',
                      'type' : 'item',
                      'url'  : '/apps/dashboards/project'
                  }
              ]
           },
        //   {
        //       'id'   : 'settings',
        //       'title': 'Settings',
        //       'type' : 'collapse',
        //       'icon' : 'settings',
        //       'children': [
        //         {
        //             'id'      : 'financial',
        //             'title'   : 'Financial',
        //             'type'    : 'item',
        //             'url'     : '/apps/financial'
        //           },
        //         {
        //             'id'   : 'affiliate',
        //             'title': 'Affiliate',
        //             'type' : 'item',
        //             'url'  : '/apps/affiliate',
        //             'exact': true
        //         }
        //       ]
        //   },
          {
              'id'   : 'add-a-new-site',
              'title': 'Add a new site',
              'type' : 'item',
              'icon' : 'add_to_queue',
              'url'  : '/apps/AddANewSite'
          },
          {
              'id': 'about-us',
              'title': 'About us',
              'type': 'item',
              'icon': 'about_us',
              'url': '/apps/aboutus',
          },
          {
              'id': 'todo&list',
              'title': 'Todo List',
              'type': 'item',
              'icon': 'help',
              'url': '/apps/todolist',
          },
          {
              'id': 'settings',
              'title': 'Settings',
              'type': 'item',
              'icon': 'settings',
              'url': '/apps/settings',
          },
          {
              'id'   : 'help&support',
              'title': 'Help & Support',
              'type' : 'item',
              'icon' : 'help',
              'url'  : '/apps/help&support',
          }
      ]
  }
];

export default navigationConfig;
