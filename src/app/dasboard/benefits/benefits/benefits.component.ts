import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADMIN, CUSTOMER, COMPANYID, BENEFIT, PREMIUM } from 'src/app/shared/constants';
import { CardModel } from 'src/app/shared/models';
import { Item } from 'src/models/item.model';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { ItemService } from 'src/services/item.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {


  items: Item[] = [];
  ADMIN = ADMIN;
  CUSTOMER = CUSTOMER;
  user: User;

  services: CardModel[];

  constructor(private itemService: ItemService,
    private accountService: AccountService,
    private router: Router,
  ) {
    this.itemService.getItems(COMPANYID, BENEFIT).subscribe(data => {
      this.items = data;
      this.services = [];
      this.items.forEach(item => {
        this.services.push({
          heading: item.Name,
          body: item.ItemCategory,
          img: item.ImageUrl,
          url: `/benefit/${item.ItemId}`
        });
      })
    });

  }

  ngOnInit() {



    // this.accountService.user.subscribe(data => {
    //   this.user = data;
    // });
  }

  getFromPrice(item: Item): number {
    if (!item.Children || !item.Children.length)
      return 0;

    const prems = item.Children.filter(x => x.ItemType === PREMIUM);
    if (!prems.length)
      return 0;

    let from: number = prems[0].Price;
    if (prems.length == 1)
      return from;

    for (let i = 1; i < prems.length; i++) {
      if (prems[i].Price > from)
        from = prems[i].Price;
    }

    return from;
  }
  add() {
    this.router.navigate([`/benefit/add`])
  }
  view(item: Item) {
    this.router.navigate([`/benefit/${item.ItemId}`]);
  }
  book(item: Item) {
    this.router.navigate([`/book/${item.ItemId}`]);
  }
}
