import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StrongPasswordRegexp } from 'app/core/models/regex.model';
import { AuthService } from 'app/core/services/auth.service';

type addUserForm = {
  firstName: FormControl<string>,
  lastName: FormControl<string>,
  username: FormControl<string>,
  email: FormControl<string>,
  password: FormControl<string>,
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
    #fb = inject(NonNullableFormBuilder);
    http = inject(HttpClient);
    authService = inject(AuthService);
    router = inject(Router)

    registerForm: FormGroup<addUserForm> = this.#fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern(StrongPasswordRegexp)]],
    })

    onSubmit(): void {
    }
}
