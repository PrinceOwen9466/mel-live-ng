import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ResourceService} from '../../../_services/resource.service';
import {IState} from '../../../_models/_interfaces/reception';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  states: IState[] = [];
  passwordVisible = false;
  checkPasswordVisible = false;
  form: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    gender: ['Male', [Validators.required]],
    state: ['Abia', [Validators.required]],
    password: ['', [Validators.required]],
    checkPassword: ['', [Validators.required]],
    username: ['', [Validators.required]],
    dateOfBirth: [null, [Validators.required]],
    phoneNumber: ['', [Validators.required]],
  });

  constructor(private resources: ResourceService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.resources.getStates().subscribe((states) => {
      this.states = states;
    });
  }

  passwordConfirmation = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.form.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }
}
