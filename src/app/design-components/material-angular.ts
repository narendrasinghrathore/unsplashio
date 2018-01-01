import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatDialogModule,
  MatChipsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatDialogModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatDialogModule,
    MatChipsModule
  ]
})
export class MaterialModule {}
