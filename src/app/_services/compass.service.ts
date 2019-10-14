import {EventEmitter, Injectable} from '@angular/core';
import {ActivatedRoute, NavigationStart, NavigationEnd, Router, Event} from '@angular/router';
import {CrownProps} from '../comp/crown/crown.component';

@Injectable({
  providedIn: 'root'
})

export class CompassService {
  context: CompassContext;
  navigating = new EventEmitter();
  navigationEnd = new EventEmitter();

  constructor(private route: Router) { }

  public init() {
    this.context = points[0];
    this.updateContext();

    this.route.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.navigating.emit();
      } else if (event instanceof NavigationEnd) {
        this.navigationEnd.emit();
        this.updateContext();
      }
    });
  }

  updateContext() {
    const index = points.findIndex((value) => this.route.isActive(value.route, false));
    if (index >= 0 && index < points.length) { this.context = points[index]; }
  }
}

export class CompassContext {
  route: string;
  name: string;
  crown: CrownProps;
}

const points: CompassContext[] = [
  {
    route: '/dashboard', name: 'dashboard',
    crown: {
      label: '',
      background: '#fff',
      fill: '#93C62F',
      height: '115px',
      iconPath: '/assets/images/logo.png',
      iconWidth: '150px',
      iconHeight: 'auto'
    }
  },
  {
    route: '/wallet', name: 'wallet',
    crown: {
      label: 'wallet',
      background: '#93C62F',
      fill: '#fff',
      height: '115px',
      icon: 'bank',
      nativeIcon: true
    },
  },
  {
    route: '/referrals', name: 'referrals',
    crown: {
      label: 'referrals',
      background: '#93C62F',
      fill: '#fff',
      height: '115px',
      icon: 'zwicon-user',
    },
  },
  {
    route: '/store', name: 'store',
    crown: {
      label: 'store',
      background: '#93C62F',
      fill: '#fff',
      height: '115px',
      icon: 'zwicon-shopping-bag-alt',
    },
  },
  {
    route: '/account', name: 'account',
    crown: {
      label: 'account settings',
      background: '#93C62F',
      fill: '#fff',
      height: '115px',
      icon: 'zwicon-cog',
    },
  },
  {
    route: '/support', name: 'support',
    crown: {
      label: 'customer care',
      background: '#93C62F',
      fill: '#fff',
      height: '115px',
      icon: 'zwicon-headphone',
    },
  },
];
