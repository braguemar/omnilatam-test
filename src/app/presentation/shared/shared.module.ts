import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PIPES } from './pipes';


@NgModule({
  declarations: [
    ...PIPES
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...PIPES
  ]
})
export class SharedModule {}
