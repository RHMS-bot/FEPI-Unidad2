import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnidadesComponent } from './components/unidades/unidades.component';

const routes: Routes = [
  { path: 'unidades/2', component: UnidadesComponent },
  { path: '**', redirectTo: 'unidades/2' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
