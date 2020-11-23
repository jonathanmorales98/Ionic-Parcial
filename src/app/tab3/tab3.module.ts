import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
    children: [
      {
        path: 'index-estudiante',
        loadChildren: () => import('../index-estudiante/index-estudiante.module').then(m => m.IndexEstudiantePageModule)
      },
      {
        path: 'consultar-estudiante',
        loadChildren: () => import('../consultar-estudiante/consultar-estudiante.module').then(m => m.ConsultarEstudiantePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo:'index-estudiante',
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
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
