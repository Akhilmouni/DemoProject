import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.gaurd';
import { PageNotFoundComponent } from './areas/page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './areas/unauthorized/unauthorized.component';
import { OfflineComponent } from './areas/offline/offline.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './areas/login/login.module#LoginModule',
  },
  {
    path: 'dashboard',
    loadChildren: './areas/dashboard/dashboard.module#DashboardModule',
    canLoad: [AuthGuard] // use this guard to decide the application to load entire module lazily based on user permisions.
  },
  {
    path: 'offline',
    component: OfflineComponent
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
