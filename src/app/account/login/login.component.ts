import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADMIN } from 'src/app/shared/constants';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = 'admin@mcgaye.co.za';
  password: string ='admin@mcgaye.co.za';
  error: string;
  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  login() {
    this.error = ''
    this.accountService.login({ email: this.email, password: this.password }).subscribe(data => {
      console.log(data);
      if (data && data.UserId) {
        this.accountService.updateUserState(data);
        if (data.UserType === ADMIN) {
          this.router.navigate(['/dashboard']);
        }
      } else {
        this.accountService.updateUserState(null);
        this.error = 'Opps wrong login details'
      }

    })
  }
}
