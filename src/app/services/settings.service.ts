import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  allSettings: Settings[] = [
    {
      id: 0,
      name: 'hideCategory',
      value: false
    }
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
    console.log(this.allSettings);
    localStorage.setItem('settings', JSON.stringify(this.allSettings));
  }

}

interface Settings {
  id: number;
  name: string;
  value: boolean;
}
