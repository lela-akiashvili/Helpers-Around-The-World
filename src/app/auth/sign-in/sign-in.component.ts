import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SideFormComponent } from '../../components/side-form/side-form.component';

@Component({
  selector: 'app-sign-in',
  imports: [SideFormComponent, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  private fb = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  onSubmit() {
    console.log(this.signInForm.getRawValue());
    const rawform = this.signInForm.getRawValue();
    this.authService
      .signIn(rawform.email, rawform.password)
      .subscribe((result) => {
        if (result.error) {
          console.log(result.error.message);
        } else {
          this.router.navigateByUrl('/home');
        }
      });
  }
}
