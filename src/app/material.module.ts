import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [MatButtonModule, MatCardModule, OverlayModule],
  exports: [MatButtonModule, MatCardModule, OverlayModule],
  providers: [],
})
export class MaterialModule {}
