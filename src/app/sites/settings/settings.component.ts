import { Component } from '@angular/core';
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  settings: any[] = [];

  constructor(private settingsService: SettingsService) {
    this.settings = this.settingsService.getAll();
  }

  toggleSetting(id: number) {
    this.settingsService.toggleSetting(id);
  }

}
