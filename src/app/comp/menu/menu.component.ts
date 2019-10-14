import {Component, Input, OnInit} from '@angular/core';
import {DeviceContext, DeviceService} from '../../_services/device.service';
import {CompassContext, CompassService} from 'src/app/_services/compass.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() isCollapsed: boolean;

  get dc(): DeviceContext {
    return this.device.context;
  }

  get cc(): CompassContext {
    return this.compass.context;

  }

  constructor(private device: DeviceService, private compass: CompassService) {
  }

  ngOnInit() {
  }


}
