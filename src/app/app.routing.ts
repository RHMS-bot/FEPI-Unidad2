import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UnidadesComponent } from './components/unidades/unidades.component';

const routes: Routes = [
  
  { path: 'unidades/2', component: UnidadesComponent },
  { path: '**', redirectTo: 'unidades/2' }
];

export const routingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled',
});
