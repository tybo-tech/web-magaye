import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POLICY, COMPANYID, CONFIG, IMAGE_CROP_SIZE, PREMIUM, MEMBERTYPES, BENEFIT, PREMIUM_BENEFIT } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';
import { item, Item } from 'src/models/item.model';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { ItemService } from 'src/services/item.service';
import { UploadService } from 'src/services/upload.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {


  item: Item;
  message: string;
  itemId: string;
  user: User;
  heading: string;
  benefits: Item[];
  MEMBERTYPES = MEMBERTYPES;
  parsedHtml: Document;
  index: number;
  pop: string;
  premiums: Item[];
  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService,
    private uploadService: UploadService,
    private router: Router,
  ) {

    this.activatedRoute.params.subscribe(r => {
      this.itemId = r.id;
      this.user = accountService.currentUserValue;
      if (this.itemId === 'add') {
        this.heading = `Adding a blog`

        this.item = {
          ItemId: '',
          RelatedId: '',
          RelatedParentId: '',
          Name: '',
          ParentId: '',
          ItemType: POLICY,
          CompanyId: COMPANYID,
          Description: '',
          OrderingNo: 1,
          Price: 0,
          ItemStatus: 'Published',
          ItemCode: '',
          ImageUrl: '',
          ItemPin: '',
          ItemCategory: POLICY,
          ItemSubCategory: '',
          CreateUserId: '',
          ModifyUserId: '',
          StatusId: 1
        }
      } else {
        this.getItem();
      }

    });

  }

  ngOnInit() {


  }
  back() {
    this.router.navigate(['/policies'])
  }
  getItem() {
    this.itemService.getItem(this.itemId).subscribe(data => {
      if (data && data.ItemId) {
        this.item = data;
        if (this.item && !this.item.Children.length)
          this.addCharge();
        else
          this.premiums = this.item.Children.filter(x => x.ItemType === PREMIUM);



        this.getItems();
        this.heading = data.Name
      }

    });
  }

  addCharge() {
    this.item.Children.push({
      ItemId: '',
      RelatedId: '',
      RelatedParentId: '',
      Name: '',
      ParentId: this.item.ItemId,
      ItemType: PREMIUM,
      CompanyId: COMPANYID,
      Description: '',
      OrderingNo: 1,
      Price: null,
      ItemStatus: 'Published',
      ItemCode: '',
      ImageUrl: '',
      ItemPin: '',
      ItemCategory: PREMIUM,
      ItemSubCategory: '',
      CreateUserId: '',
      ModifyUserId: '',
      StatusId: 1
    });
  }

  getItems() {
    this.itemService.getItems(COMPANYID, BENEFIT, false).subscribe(data => {

      this.benefits = data || [];
      if (this.benefits && this.benefits.length) {
        this.item.Children.forEach(itemOption => {
          const parentItem = this.benefits.find(x => x.ItemId === itemOption.RelatedId);
          if (parentItem)
            parentItem.Selected = true;
        })
      }
    })
  }
  save() {
    if (this.item.CreateDate) {
      this.item.ItemType = POLICY;
      this.item.ItemCategory = POLICY;
      this.item.CompanyId = COMPANYID;
      this.itemService.update(this.item).subscribe(data => {
        if (data && data.ItemId) {
          this.message = 'Item updated successfully.';

        }
      })
    } else {
      this.itemService.add(this.item).subscribe(data => {
        if (data && data.ItemId) {
          this.router.navigate([`policy`, data.ItemId])
          this.message = 'Item created successfully.';

        }
      })
    }

  }
  savePrem(child: Item) {
    if (!child.Price || !child.Name)
      return;

    if (child.CreateDate) {
      this.itemService.update(child).subscribe(data => {
        if (data && data.ItemId) {
          this.pop = 'Item updated successfully.';

        }
      })
    } else {
      this.itemService.add(child).subscribe(data => {
        if (data && data.ItemId) {
          // this.router.navigate([`policy`, data.ItemId])
          this.pop = 'Item created successfully.';

        }
      })
    }

  }
  benefitSelect(benefit) {
    benefit.Selected = !benefit.Selected;
    if (!benefit.Selected) {
      const check = this.item.Children.find(x => x.ItemId === benefit.itemId);
      if (!check || !check.ItemId)
        return;

      const i = this.item.Children.indexOf(check);
      this.itemService.delete(check.ItemId).subscribe(data => {
        if (Number(data) === 1 && i >= 0) {
          this.item.Children.splice(i);
        }
      })
    }


    if (benefit.Selected) {
      this.itemService.add({
        ItemId: '',
        RelatedId: benefit.ItemId,
        RelatedParentId: '',
        Name: benefit.Name,
        ParentId: this.item.ItemId,
        ItemType: PREMIUM_BENEFIT,
        CompanyId: COMPANYID,
        Description: '',
        OrderingNo: 1,
        Price: 0,
        ItemStatus: 'Published',
        ItemCode: '',
        ImageUrl: '',
        ItemPin: '',
        ItemCategory: '',
        ItemSubCategory: '',
        CreateUserId: '',
        ModifyUserId: '',
        StatusId: 1
      }).subscribe(data => {
        if (data && data.ItemId) {
          this.item.Children.push(data);
        }
      })
    }
  }
  onImageChangedEvent(url) {
    if (this.item) {
      this.item.ImageUrl = url;
    }
  }
}
