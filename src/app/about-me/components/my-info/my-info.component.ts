import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { MyInfo } from '../my-info';

import { MyInfoService } from '../../../services/repositories/my-info.service';
import { LoaderService } from '../../../services/loader/loader.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss']
})
export class MyInfoComponent implements OnInit {
  myInfoForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.min(0)]),
    email: new FormControl('', [Validators.email]),
    mobile: new FormControl('', Validators.pattern('^(\\+\\d{1,3}[- ]?)?\\d{10}$')),
    interests: new FormControl(''),
    description: new FormControl('')
  });

  constructor(
    private myInfoService: MyInfoService,
    private loaderService: LoaderService,
    private toastr: ToastrService
  ) { }

  isMyInfoLoaded() {
    return this.myInfoService.myInfoLoaded;
  }

  saveMyInfo() {
    const myInfo = this.myInfoForm.getRawValue();
    this.myInfoService.myInfo = {...myInfo};
    this.toastr.success('My Info Saved', 'Success');
    this.myInfoForm.reset(this.myInfoForm.value);  //resets the form state
  }

  setMyInfo(myInfo: MyInfo) {
    if(!myInfo) return;
    this.myInfoForm.setValue({
      name: myInfo.name,
      age: myInfo.age,
      email: myInfo.email,
      mobile: myInfo.mobile,
      interests: myInfo.interests,
      description: myInfo.description
    });
  }

  loadMyInfo() {
    if(this.myInfoService.myInfoLoaded) {
      this.setMyInfo(this.myInfoService.myInfo);
    } else {
      this.loaderService.loading = true;
      this.myInfoService.loadMyInfo().subscribe((resp: any) => {
        this.loaderService.loading = false;
        this.myInfoService.myInfoLoaded = true;
        if(resp.success) {
          if(!resp.data) return;
          this.myInfoService.myInfo = resp.data;
          this.setMyInfo(resp.data);
        } else {
          //i'm adding a generic message here. usually a specific error message will be added based on the error type.
          this.toastr.error('Failed to load data. Please try again.', 'Error');
        }
      });
    }
  }

  ngOnInit(): void {
    this.loadMyInfo();
  }

}
