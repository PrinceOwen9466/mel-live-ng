import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-crown',
  templateUrl: './crown.component.html',
  styleUrls: ['./crown.component.css']
})

export class CrownComponent implements OnInit {
  @Input() props: CrownProps = {
    label: '',
    background: '#fff',
    fill: '#93C62F',
    height: '115px',
    iconPath: '/assets/images/logo.png',
    iconWidth: '150px',
    iconHeight: 'auto'
  };
  @Output() menuToggled = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}

export interface CrownProps {
  label: string;
  background: string;
  fill: string;
  height?: string;
  icon?: string;
  nativeIcon?: boolean;
  iconPath?: string;
  iconWidth?: string;
  iconHeight?: string;
}
