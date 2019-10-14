import { Component, OnInit } from '@angular/core';
import {DeviceContext, DeviceService} from '../../_services/device.service';
import {CompassService} from '../../_services/compass.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  isCollapsed = false;
  menuDrawerActive = false;

  get dc(): DeviceContext {
    return this.device.context;
  }

  constructor(private device: DeviceService,
              private compass: CompassService) {
    this.compass.navigating
      .subscribe(() => {
        if (this.menuDrawerActive) {
          this.menuDrawerActive = false;
        }
      });
  }

  ngOnInit() {
  }

}
