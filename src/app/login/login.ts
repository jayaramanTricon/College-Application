import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Constant } from '../constant';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  username = '';
  password = '';
  router = inject(Router);

  onLogin() {
    const userExist = Constant.userList.find(
      (user) => user.userName === this.username && user.password === this.password
    );

    if (userExist) {
      console.log('Login successful:', userExist);
      localStorage.setItem('user', JSON.stringify(userExist));
      if(userExist.role == 'admin') {
        this.router.navigate(['/admin']);
      } else if(userExist.role == 'student') {
        this.router.navigate(['/student']);
      } else if(userExist.role == 'instructor') {
        this.router.navigate(['/instructor']);
      }
    } else {
      console.log('Invalid username or password');
    }
  }
}
