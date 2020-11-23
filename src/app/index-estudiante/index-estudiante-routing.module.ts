import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexEstudiantePage } from './index-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: IndexEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexEstudiantePageRoutingModule {}
