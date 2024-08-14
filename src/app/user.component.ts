import { Component, Input } from '@angular/core';
import { User, UserInformation } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styles: [],
})
export class UserComponent {
  userInfo: UserInformation;

  constructor(public userService: UserService) {
    this.userInfo = {} as UserInformation;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response: UserInformation) => {
      debugger;
      //this.userInfo = response;
      //return;
      console.log(response);
      
      
      //this.userInfo.support = response.support;
      
      this.userInfo.message = response?.message?.map((item) => {
        var user = {} as User;
        user.gender = item?.gender;
        user.slang = item?.slang;
        user.first_name = item?.first_name;
        user.last_name = item?.last_name;
        user.member_id = item?.member_id;
        return user;
      });
    });
  }
}
