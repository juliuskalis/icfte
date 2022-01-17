import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  allSettings: Settings[] = [
        {
          id: 0,
          name: 'showBackbutton',
          value: true
        },
        {
          id: 1,
          name: 'showCategory',
          value: true
        },
        {
          id: 2,
          name: 'showId',
          value: true
        },

  ];

  constructor() {
    const x = localStorage.getItem('settings');
    if (x) {
      this.allSettings = JSON.parse(x);
    } else {
      localStorage.setItem('settings', JSON.stringify(this.allSettings));
    }
  }

  getAll() {
    return this.allSettings;
  }

  toggleSetting(id: number) {
    let x = this.allSettings.find(x => x.id === id);
    if (x) {
      x.value = !x.value;
    }
    localStorage.setItem('settings', JSON.stringify(this.allSettings));
  }

}
interface SettingBlock {
  blockId: number,
  name: string,
  settings: Settings[];
}

interface Settings {
  id: number;
  name: string;
  value: boolean;
}
