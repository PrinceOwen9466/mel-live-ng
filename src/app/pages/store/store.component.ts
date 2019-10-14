import {Component, OnInit, AfterViewInit} from '@angular/core';
import {DeviceService} from '../../_services/device.service';
import {StoreService} from '../../_services/store.service';
import {IProduct} from '../../_models/product';
import {SCREEN_SIZE} from '../../_models/global.enum';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit, AfterViewInit {
  products: IProduct[] = [];

  constructor(private dv: DeviceService, private store: StoreService) {
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.store.getProducts().subscribe(res => {
      console.log(res);
      this.products = res;
    });
  }
}
