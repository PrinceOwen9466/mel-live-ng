import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../_services/device.service';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {

  constructor(private dv: DeviceService) {
    dv.init();
  }

  ngOnInit() {
  }

}
