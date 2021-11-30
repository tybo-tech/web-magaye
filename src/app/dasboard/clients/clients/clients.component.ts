import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADMIN, CLIENT, COMPANYID, CUSTOMER } from 'src/app/shared/constants';
import { CardModel } from 'src/app/shared/models';
import { Item } from 'src/models/item.model';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { ItemService } from 'src/services/item.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {


  users: User[] = [];
  ADMIN = ADMIN;
  CUSTOMER = CUSTOMER;
  user: User;

  services: CardModel[];

  constructor(
    private accountService: AccountService,
    private router: Router,
    private userService: UserService,

  ) {
    this.userService.getUsers(COMPANYID, CLIENT).subscribe(data => {
      this.users = data;
      this.services = [];
      this.users.forEach(item => {
        this.services.push({
          heading: item.Name,
          body: item.Address,
          img: item.Dp,
          url: `/client/${item.UserId}`,
          CreateDate: item.CreateDate
        });
      })
    });

  }

  ngOnInit() {



    // this.accountService.user.subscribe(data => {
    //   this.user = data;
    // });
  }
  add() {
    this.router.navigate([`/client/add`])
  }
  view(item: Item) {
    this.router.navigate([`/client/${item.ItemId}`]);
  }
  book(item: Item) {
    this.router.navigate([`/book/${item.ItemId}`]);
  }
  manage(item: User){
    this.router.navigate([`/client/${item.UserId}`]);

  }
}
