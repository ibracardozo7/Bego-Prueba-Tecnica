import { Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { OrderUpcomingComponent } from './pages/order-upcoming/order-upcoming.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: OrderUpcomingComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
