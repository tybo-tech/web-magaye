import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/item.model';
import { ItemService } from 'src/services/item.service';
import { COMPANYID, POLICY, PREMIUM, SERVICES } from '../shared/constants';
import { CardModel } from '../shared/models';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  policies: CardModel[];
  actionName ='More details' ;
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    window.scroll(0,0);
    this.getPolicies();
  }
  getPolicies(){
    this.itemService.getItems(COMPANYID, POLICY).subscribe(data => {
      if(data && data.length){
        this.policies = [];
        data.forEach(item => {
          this.policies.push({
            heading: item.Name,
            body: '',
            img: item.ImageUrl,
            url: `/policy-details/${item.ItemId}`,
            Price: this.getFromPrice(item),
            PriceLabel: `From `
          });
        })
      }
     
    });
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
}
