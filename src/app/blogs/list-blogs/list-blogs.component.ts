import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ADMIN, CUSTOMER, COMPANYID, BLOG } from 'src/app/shared/constants';
import { CardModel } from 'src/app/shared/models';
import { Item } from 'src/models/item.model';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { ItemService } from 'src/services/item.service';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListBlogsComponent implements OnInit {


  items: Item[] = [];
  ADMIN = ADMIN;
  CUSTOMER = CUSTOMER;
  user: User;

  services: CardModel[];

  constructor(private itemService: ItemService,
    private accountService: AccountService,
    private router: Router,
  ) {
    this.itemService.getItems(COMPANYID, BLOG).subscribe(data => {
      this.items = data;
      this.services = [];
      this.items.forEach(item => {
        this.services.push({
          heading: item.Name,
          body: item.Description.substr(0, 200),
          img: item.ImageUrl,
          url: `/manage-blog/${item.ItemId}`,
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
    this.router.navigate([`/manage-blog/add`])
  }
  view(item: Item) {
    this.router.navigate([`/manage-blog/${item.ItemId}`]);
  }
  book(item: Item) {
    this.router.navigate([`/book/${item.ItemId}`]);
  }

}
