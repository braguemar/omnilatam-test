import { CarModel } from 'src/app/core';
import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailProductComponent } from '../detail-product/detail-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

  @Input()
  public product!: CarModel;

  constructor(private modalService: NgbModal) {}

  public onMoreInfo(product: CarModel) {
    const modalRef = this.modalService.open(DetailProductComponent, { size: 'lg', beforeDismiss: () => false });
    modalRef.componentInstance.product = product;
  }

}
