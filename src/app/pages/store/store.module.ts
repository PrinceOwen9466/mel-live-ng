import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { Routes, RouterModule } from '@angular/router';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import {FlexModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductViewComponent } from './product-view/product-view.component';

const routes: Routes = [
  { path: '', component: StoreComponent },
];

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    [RouterModule.forChild(routes)],
    FlexModule,
    HttpClientModule
  ],
  declarations: [StoreComponent, ProductCardComponent, ProductViewComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [RouterModule],
})
export class StoreModule { }
