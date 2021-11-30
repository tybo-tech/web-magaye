import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { DASHBOARD_MENU, GUEST_MENU, LOGGED_IN_MENU, MENUITEMS } from '../constants';
import { NavModel } from '../models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  showNav: boolean;
  items: NavModel[];
  accountItems: NavModel[];
  user: User;
  constructor(
    private accountService: AccountService,
    private router: Router

  ) { }

  ngOnInit() {
    // this.showNav = true;

    this.accountService.user.subscribe(data => {
      this.user = data;
      if (this.user) {
        this.items = DASHBOARD_MENU;
        this.accountItems = LOGGED_IN_MENU;
      }
      else { 
        this.items = MENUITEMS; 
        this.accountItems = GUEST_MENU;
      }
    })
  }
  itemClicked(item: NavModel){
    this.showNav = false;
    if(item.Url === 'logout'){
      return this.logout();
    }
  }

  logout(){
    this.accountService.logout();
    this.router.navigate(['']);
  }
}
