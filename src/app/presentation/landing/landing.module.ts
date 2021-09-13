import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceProviderConfig } from 'src/app/common';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailProductComponent } from './detail-product/detail-product.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule
  ],
  providers: [ ...ServiceProviderConfig ]
})
export class LandingModule {}
