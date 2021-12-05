import {Component} from '@angular/core';
import {Card} from "../../models/card";
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-part-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  newCards: Card[] = [];
  dialogToggle: boolean = false;

  constructor(private cardService: CardService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = (event: ProgressEvent<FileReader>) => {
      this.newCards = JSON.parse(event?.target?.result as string);
      this.dialogToggle = true;
    };
    reader.onerror = () => {
      alert(file.name + ' is not loadable!');
    };
  }

  overwriteCurrent() {
    this.cardService.addNewCards(this.newCards);
    this.dialogToggle = false;
  }

}
