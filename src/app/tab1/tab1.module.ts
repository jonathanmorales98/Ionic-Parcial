import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'ingreso',
        loadChildren: () => import('../ingreso/ingreso.module').then(m => m.IngresoPageModule)
      },
      {
        path: 'login-admin',
        loadChildren: () => import('../login-admin/login-admin.module').then(m => m.LoginAdminPageModule)
      },
      {
        path: 'login-estudiante',
        loadChildren: () => import('../login-estudiante/login-estudiante.module').then(m => m.LoginEstudiantePageModule)
      },
      {
        path: 'integrantes',
        loadChildren: () => import('../integrantes/integrantes.module').then(m => m.IntegrantesPageModule)
      },
      {
        path: 'index-estudiante',
        loadChildren: () => import('../index-estudiante/index-estudiante.module').then(m => m.IndexEstudiantePageModule)
      },
      {
        path: 'index-admin',
        loadChildren: () => import('../index-admin/index-admin.module').then(m => m.IndexAdminPageModule)
      },
      {
        path: '',
        redirectTo:'home',
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
    Tab1PageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
