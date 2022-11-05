import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registry-page',
  templateUrl: './registry-page.component.html',
  styleUrls: ['./registry-page.component.scss']
})
export class RegistryPageComponent implements OnInit {

  public registerForm = this.fb.group({
    login: '',
    password: '',
    repeatPassword: '',
  })

  constructor(
    private readonly fb: FormBuilder,
    private readonly auth: AuthService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
  }

  public async register() {
    if (!this.registerForm.valid) return;

    const formValue = this.registerForm.value;

    if (formValue.password !== formValue.repeatPassword) {
      this.snackBar.open('Пароли не совпадают!');
    }
    try {
      const result = await lastValueFrom(this.auth.signup(formValue.login, formValue.password))
      if (result.status === 201) {
        this.router.navigateByUrl('/start');
      } else if (result.status === 400) {
        this.snackBar.open('При авторизации произошла ошибка. Поверьте правильность заполнения полей.')
      }

    } catch (e: unknown) {
      if (e instanceof Error) {
        this.snackBar.open(e.message);
      }
    }
  }
}
