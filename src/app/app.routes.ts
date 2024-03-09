import {Routes}        from '@angular/router';
import {HomeComponent} from './client/pages/home/home.component';
import {ROUTES}        from './shared/config';

export const routes: Routes = [
  {
    path: ROUTES.HOME,
    component: HomeComponent
  },
  {
    path: `${ROUTES.RESTAURANT_DETAIL}/:id`,
    loadComponent: () => import('./client/pages/resturant-detail/resturant-detail.component').then(c => c.ResturantDetailComponent)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTES.HOME
  }
];
