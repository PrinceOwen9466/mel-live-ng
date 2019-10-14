import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {ReceptionComponent} from './reception.component';
import { Routes, RouterModule } from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: ReceptionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    FlexModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
  ],
  declarations: [RegisterComponent, LoginComponent, ReceptionComponent],
  exports: [RouterModule],
  bootstrap: [ReceptionComponent]
})
export class ReceptionModule { }
