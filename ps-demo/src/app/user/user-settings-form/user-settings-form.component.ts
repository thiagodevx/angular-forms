import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data/data.service';
import { UserSettings } from 'src/app/data/user-settings';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  postError = false;
  postErrorMessage: string;
  subscriptionTypes: Observable<string[]>;
  toggle: string;
  startDate: Date;
  startTime: Date;
  rating: number;

  originalUserSettings: UserSettings = {
    id: null,
    name: null,
    emailOffers: true,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings: UserSettings = { ...this.originalUserSettings };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.toggle = 'On';
    this.startTime = new Date();
    this.startDate = new Date();
  }

  onSubmit(form: NgForm) {
    this.postError = false;
    if (form.invalid) {
      this.postError = true;
      this.postErrorMessage = 'Please fix the errors in the form';
      return;
    }
    this.dataService.postUserSettingsForm(this.userSettings).subscribe( object => this.success(object) , error => this.onHttpError(error) );
  }

  success(userSettings: UserSettings) {
  }

  onHttpError(error: HttpErrorResponse) {
    this.postError = true;
    this.postErrorMessage = `Failed to save the user settings, obtained an ${error.status} status code`;
  }
}
