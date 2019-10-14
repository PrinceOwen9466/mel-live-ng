import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { JwtModule } from '@auth0/angular-jwt';

import { DeviceDetectorModule } from 'ngx-device-detector';

import { CrownComponent } from './comp/crown/crown.component';
import { MenuComponent } from './comp/menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CardComponent } from './comp/card/card.component';
import { StoreModule } from './pages/store/store.module';
import { ReceptionModule } from './pages/reception/reception.module';
import { CoreComponent } from './pages/core/core.component';
import {environment} from '../environments/environment';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CrownComponent,
    MenuComponent,
    DashboardComponent,
    SettingsComponent,
    CardComponent,
    CoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => JSON.stringify(localStorage.getItem('accessToken')),
        whitelistedDomains: [environment.apiBase],
        blacklistedRoutes: [environment.apiBase + 'auth/']
      }
    }),
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    AngularSvgIconModule,
    DeviceDetectorModule.forRoot(),
    StoreModule,
    ReceptionModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  exports: [HttpClientModule],
})
export class AppModule { }
