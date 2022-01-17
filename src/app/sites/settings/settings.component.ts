import { Component } from '@angular/core';
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  settings: any[] = [];

  settingIdsWithTexts = new Map<number, string>([
      [0, 'Den Button zum zurück navigieren anzeigen:'],
      [1, 'Kategorie anzeigen:'],
      [2, 'Id anzeigen:']
  ]);

  constructor(private settingsService: SettingsService) {
    this.settings = this.settingsService.getAll();
    this.mapSettings();
  }

  mapSettings() {
    this.settings.forEach(item => {
      item.text = this.settingIdsWithTexts.get(item.id);
    });
  }

  toggleSetting(id: number) {
    this.settingsService.toggleSetting(id);
  }

}
