import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CLIENT, COMPANYID, CONFIG, IMAGE_CROP_SIZE } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';
import { Item } from 'src/models/item.model';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { ItemService } from 'src/services/item.service';
import { UploadService } from 'src/services/upload.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {


  message: string;
  userId: string;
  user: User;
  heading: string;
  items: Item[];

  parsedHtml: Document;
  index: number;
  error: User;
  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService,
    private uploadService: UploadService,
    private router: Router,
    private userService: UserService,

  ) {

    this.activatedRoute.params.subscribe(r => {
      this.userId = r.id;
      this.user = accountService.currentUserValue;
      if (this.userId === 'add') {
        this.heading = `Adding a blog`
        this.user = {
          UserId: '',
          CompanyId: COMPANYID,
          UserType: CLIENT,
          Name: '',
          Surname: '',
          Email: '',
          PhoneNumber: '',
          Password: '',
          Dp: '',
          AddressLineHome: '',
          AddressUrlHome: '',
          CarReg: '',
          CarType: '',
          Gender: '',
          AddressLineWork: '',
          AddressUrlWork: '',
          CreateUserId: 'sign-up-shop',
          ModifyUserId: 'sign-up-shop',
          StatusId: '1',
          UserToken: ''
        };
      } else {
        this.getItem();
      }

    });

  }

  ngOnInit() {


  }
  back() {
    this.router.navigate(['/clients'])
  }
  getItem() {
    this.userService.getUser(this.userId).subscribe(data => {
      if (data && data.UserId) {
        this.user = data;
        this.heading = data.Name
      }

    });
  }

  // getItems() {
  //   this.itemService.getItems(COMPANYID, CONFIG, true).subscribe(data => {

  //     this.items = data || [];
  //     if (this.items && this.items.length) {
  //       this.item.Children.forEach(itemOption => {
  //         const parentItem = this.items.find(x => x.ItemId === itemOption.RelatedParentId);
  //         if (parentItem) {
  //           const childItem = parentItem.Children.find(x => x.ItemId === itemOption.RelatedId);
  //           if (childItem) {
  //             parentItem.SelectedItemId = childItem.ItemId;
  //           }
  //         }
  //       })
  //     }
  //   })
  // }


  onImageChangedEvent(url) {
    if (this.user) {
      this.user.Dp = url;
    }
  }

  save() {
    if (this.user.CreateDate && this.user.UserId.length > 0) {
      this.userService.update(this.user).subscribe(data => {
        if (data && data.UserId) {
          this.user = data;
          this.message = 'client updated successfully.';

        }
      })
    } else {
      if(!this.user.Email){
        this.user.Email = `${new Date().getTime()}@system.genareted`;
      }
      this.userService.add(this.user).subscribe(data => {
        if (data && data.UserId) {
          this.user = null;
          this.router.navigate(['client', data.UserId]);
          this.message = 'Client created successfully.';
          const body = `
          We're glad to welcome  you. With Instant Easts, you can 
          Earn extra money working flexible hours. Start delivering today.`;
        } else {
          this.error = data;
        }
      })
    }
  }

}
