import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/item.model';
import { ItemService } from 'src/services/item.service';
import { COMPANYID, POLICY, PREMIUM } from '../shared/constants';
import { CardModel } from '../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  plans;
  
  hundredsYears = {
    heading: `Celebrating
    10 Years Of
    Excellence`,
    body: [
      `We help you and your family 
      deal with the loss of your loved one by providing honour and dignity through our funeral services.`
    ],
    sub: `
    10 Years of providing dignified, affordable 
Funeral Services with love and care.
    `,
    img: `assets/images/10y.png`,
    url: ``
  }
  cashless = {
    heading: `Mcgaye goes cashless`,
    body: [
      `
      As of the 1st of November 2021 all our
       branches will bee going cashless, going
        cashless implies that Mcgaye has availed 
        digital payment options for payment of premiums, 
        sign-ups and any other related payments. We have 
        put a number of payment options
       that our clients can use to pay for their policies 
       and all these methods are of these ease and convenience.
      `,
      `
      You can also pay at any of the Pay @ retailers such as;
       Shoprite, Checkers, Ackermans, Pep, Boxer and many more.
        To pay at any of these retailers all you need is your 
        Pay @ number which you can get by simply contacting us.
      `
    ],
    sub: `
    You no longer have to stand in long queues at branches but can now pay for your policy via debit order, EFT, direct deposit or ONLINE`,
    img: `assets/images/10y.png`,
    url: ``
  }
  policies: CardModel[];
  actionName ='More details' ;
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
 

    window.scroll(0, 0);
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
