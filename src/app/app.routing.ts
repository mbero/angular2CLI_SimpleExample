import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NotificationsListComponent} from './notifications_list/notifications_list.component';
import {MainPageComponent} from './main_page/main_page.component';

const appRoutes : Routes = [
    {
        path : 'notifications',
        component : NotificationsListComponent
    },
    {
        path : 'main',
        component : MainPageComponent
    }
]

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);