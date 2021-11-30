import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MEMBERTYPES, BENEFIT, COMPANYID, PREMIUM, CONFIG, PLAN_INCLUDES } from 'src/app/shared/constants';
import { Item } from 'src/models/item.model';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { ItemService } from 'src/services/item.service';
import { UploadService } from 'src/services/upload.service';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.scss']
})
export class BenefitComponent implements OnInit {



  item: Item;
  message: string;
  itemId: string;
  user: User;
  heading: string;
  items: Item[];
  MEMBERTYPES = MEMBERTYPES;
  PLAN_INCLUDES = PLAN_INCLUDES;
  parsedHtml: Document;
  index: number;
  pop: string;
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
          ItemType: BENEFIT,
          CompanyId: COMPANYID,
          Description: '',
          OrderingNo: 1,
          Price: 0,
          ItemStatus: 'Published',
          ItemCode: '',
          ImageUrl: '',
          ItemPin: '',
          ItemCategory: PLAN_INCLUDES[0].Name,
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
    this.router.navigate(['/benefits'])
  }
  getItem() {
    this.itemService.getItem(this.itemId).subscribe(data => {
      if (data && data.ItemId) {
        this.item = data;
        if (this.item && !this.item.Children.length) {
          this.addCharge();
        }
        // this.getItems();
        this.heading = data.Name
      }

    });
  }

  addCharge() {
    this.item.Children.push({
      ItemId: '',
      RelatedId:'',
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
    this.itemService.getItems(COMPANYID, CONFIG, true).subscribe(data => {

      this.items = data || [];
      if (this.items && this.items.length) {
        this.item.Children.forEach(itemOption => {
          const parentItem = this.items.find(x => x.ItemId === itemOption.RelatedParentId);
          if (parentItem) {
            const childItem = parentItem.Children.find(x => x.ItemId === itemOption.RelatedId);
            if (childItem) {
              parentItem.SelectedItemId = childItem.ItemId;
            }
          }
        })
      }
    })
  }
  save() {
    if (this.item.CreateDate) {
      this.itemService.update(this.item).subscribe(data => {
        if (data && data.ItemId) {
          this.message = 'Item updated successfully.';

        }
      })
    } else {
      this.itemService.add(this.item).subscribe(data => {
        if (data && data.ItemId) {
          this.router.navigate([`benefit`, data.ItemId])
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
          // this.router.navigate([`benefit`, data.ItemId])
          this.pop = 'Item created successfully.';

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
