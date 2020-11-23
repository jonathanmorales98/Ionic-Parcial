import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'index-admin',
    loadChildren: () => import('./index-admin/index-admin.module').then( m => m.IndexAdminPageModule)
  },
  {
    path: 'index-estudiante',
    loadChildren: () => import('./index-estudiante/index-estudiante.module').then( m => m.IndexEstudiantePageModule)
  },
  {
    path: 'registrar-estudiante',
    loadChildren: () => import('./registrar-estudiante/registrar-estudiante.module').then( m => m.RegistrarEstudiantePageModule)
  },
  {
    path: 'modificar-estudiante',
    loadChildren: () => import('./modificar-estudiante/modificar-estudiante.module').then( m => m.ModificarEstudiantePageModule)
  },
  {
    path: 'eliminar-estudiante',
    loadChildren: () => import('./eliminar-estudiante/eliminar-estudiante.module').then( m => m.EliminarEstudiantePageModule)
  },
  {
    path: 'consultar-estudiante',
    loadChildren: () => import('./consultar-estudiante/consultar-estudiante.module').then( m => m.ConsultarEstudiantePageModule)
  },  {
    path: 'recuperar-password',
    loadChildren: () => import('./recuperar-password/recuperar-password.module').then( m => m.RecuperarPasswordPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
