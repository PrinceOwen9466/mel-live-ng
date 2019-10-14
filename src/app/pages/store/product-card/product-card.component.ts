import {Component, Input, OnInit} from '@angular/core';
import {DeviceService} from '../../../_services/device.service';
import {IProduct} from '../../../_models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProduct;
  mouseOver = false;

  constructor(private dv: DeviceService) { }

  ngOnInit() {
  }
}
