import { Component } from '@angular/core';
import {SCREEN_SIZE} from './_models/global.enum';
import {BreakpointObserver} from '@angular/cdk/layout';
import {DeviceContext, DeviceService} from './_services/device.service';
import {ActivatedRoute, NavigationEnd, Router, Event} from '@angular/router';
import {CompassService} from './_services/compass.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private device: DeviceService,
              private compass: CompassService) {
    this.device.init();
    this.compass.init();
  }
}
