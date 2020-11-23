import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children: [
      {
        path: 'index-admin',
        loadChildren: () => import('../index-admin/index-admin.module').then(m => m.IndexAdminPageModule)
      },
      {
        path: 'registrar-estudiante',
        loadChildren: () => import('../registrar-estudiante/registrar-estudiante.module').then(m => m.RegistrarEstudiantePageModule)
      },
      {
        path: 'modificar-estudiante',
        loadChildren: () => import('../modificar-estudiante/modificar-estudiante.module').then(m => m.ModificarEstudiantePageModule)
      },
      {
        path: 'eliminar-estudiante',
        loadChildren: () => import('../eliminar-estudiante/eliminar-estudiante.module').then(m => m.EliminarEstudiantePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo:'index-admin',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
