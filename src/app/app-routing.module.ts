import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from './guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: 'login' ,
    loadChildren: () => import('./modules/login/login.module')
  },
  {
    path: 'tickets' ,
    canActivate: [isAuthenticatedGuard],
    loadChildren: () => import('./modules/tickets/tickets.module')
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
