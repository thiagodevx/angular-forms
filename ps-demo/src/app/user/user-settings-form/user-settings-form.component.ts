import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data/data.service';
import { UserSettings } from 'src/app/data/user-settings';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

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
  }

  onSubmit(form: NgForm) {
    this.dataService.postUserSettingsForm(this.userSettings).subscribe( this.success , this.onHttpError );
  }

  success(userSettings: UserSettings) {
    console.log(`Saved object with id ${userSettings.id}`);
  }

  onHttpError(error: HttpErrorResponse) {
    console.log(`Obtained error: ${error.status}`);
  }

}
