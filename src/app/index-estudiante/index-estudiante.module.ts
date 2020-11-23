import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexEstudiantePageRoutingModule } from './index-estudiante-routing.module';

import { IndexEstudiantePage } from './index-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexEstudiantePageRoutingModule
  ],
  declarations: [IndexEstudiantePage]
})
export class IndexEstudiantePageModule {}
