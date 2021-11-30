import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
user: User;
  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    this.accountService.user.subscribe(data=>{
      this.user = data;
      if(!this.user){this.router.navigate(['login'])}
    })
  }
goto(e){}
}
