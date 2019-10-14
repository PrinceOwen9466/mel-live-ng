import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {CoreComponent} from './pages/core/core.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/reception/reception.module').then(m => m.ReceptionModule) },
  { path: 'dashboard', component: CoreComponent },
  { path: 'wallet', component: DashboardComponent },
  { path: 'referrals', component: DashboardComponent },
  { path: 'store', loadChildren: () => import('./pages/store/store.module').then(m => m.StoreModule) },
  { path: 'account', component: SettingsComponent },
  { path: 'support', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
