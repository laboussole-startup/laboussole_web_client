import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-expert-login',
  templateUrl: './expert-login.component.html',
  styleUrls: ['./expert-login.component.scss']
})
export class ExpertLoginComponent {
  loginForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Handle login logic
      console.log(this.loginForm.value);
    }
  }
}
