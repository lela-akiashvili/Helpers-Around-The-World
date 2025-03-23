import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SideFormComponent } from '../../components/side-form/side-form.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, SideFormComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  private fb = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  signUpForm = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    email: ['', [Validators.required, Validators.email]],

    role: ['', Validators.required],
    gender: ['', Validators.required],
    birthday: [[Validators.required, Validators.pattern(/^\d+$/)]],
    address: ['', Validators.required],
    password: [
      '',
      [Validators.required, Validators.pattern(this.passwordPattern)],
    ],
    confirmPassword: ['', [Validators.required]],
  });
  onSubmit() {
    console.log(this.signUpForm.getRawValue());
    const rawform = this.signUpForm.getRawValue();
    this.authService
      .register(
        rawform.email,
        rawform.password,
        rawform.username,
        rawform.gender,
        rawform.birthday,
        rawform.role,
        rawform.address
      )
      .subscribe((result) => {
        if (result.error) {
          console.log(result.error.message);
        } else {
          this.router.navigateByUrl('/home');
        }
      });
  }
}
