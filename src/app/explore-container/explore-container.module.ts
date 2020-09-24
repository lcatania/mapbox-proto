import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,NgxMapboxGLModule],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
