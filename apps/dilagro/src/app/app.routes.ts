import { Route } from '@angular/router';
import { Login } from './pages/login/admin/login/login';



export const appRoutes: Route[] = [
    {
        path: '',
        component: Login,
    }, {
        path: 'admin',
        loadComponent: () =>
            import('./pages/login/admin/admin/admin').then((c) => c.Admin),
    },
];
