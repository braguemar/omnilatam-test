import { CarModel } from 'src/app/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent {

  @Input()
  public product!: CarModel;

  constructor(public activeModal: NgbActiveModal) {}

}
