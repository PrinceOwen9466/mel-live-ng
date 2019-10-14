import {Injectable} from '@angular/core';
import {DEVICE_TYPE, SCREEN_SIZE} from '../_models/global.enum';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {DeviceDetectorService, DeviceInfo} from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})

export class DeviceService {
  agent: DeviceInfo;
  context: DeviceContext;
  get mobile(): boolean { return this.detector.isMobile(); }
  get tablet(): boolean { return this.detector.isTablet(); }
  get desktop(): boolean { return this.detector.isDesktop(); }

  constructor(private observer: BreakpointObserver, private detector: DeviceDetectorService) {}

  public init() {
    this.agent = this.detector.getDeviceInfo();

    this.observer.observe([Breakpoints.Web, Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe((state: BreakpointState) => {
        if (this.observer.isMatched(Breakpoints.Handset)) {
          this.context = {
            device: DEVICE_TYPE.Mobile,
            landscape: this.observer.isMatched(Breakpoints.HandsetLandscape)
          };
        } else if (this.observer.isMatched(Breakpoints.Tablet)) {
          this.context = {
            device: DEVICE_TYPE.Tablet,
            landscape: this.observer.isMatched(Breakpoints.TabletLandscape)
          };
        } else if (this.observer.isMatched(Breakpoints.Web)) {
          this.context = {
            device: DEVICE_TYPE.Desktop,
            landscape: this.observer.isMatched(Breakpoints.WebLandscape)
          };
        }

        for (let i = sizeBreakPoints.length - 1; i >= 0; i--) {
          if (this.observer.isMatched(sizeBreakPoints[i])) {
            this.context.size = screenSizes[i];
            break;
          }
        }
      });
  }
}

const sizeBreakPoints = [Breakpoints.XSmall, Breakpoints.Small,
  Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge];

const screenSizes = [SCREEN_SIZE.XS, SCREEN_SIZE.SM, SCREEN_SIZE.MD,
  SCREEN_SIZE.LG, SCREEN_SIZE.XL];

export class DeviceContext {
  size?: SCREEN_SIZE;
  device: DEVICE_TYPE;
  landscape: boolean;
}
