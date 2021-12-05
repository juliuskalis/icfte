import {Component} from '@angular/core';
import {Card} from "../../models/card";

@Component({
  selector: 'app-part-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  fileContent: Card[] = [];

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = (event: ProgressEvent<FileReader>) => {
      this.fileContent = JSON.parse(event?.target?.result as string);
      console.log('fileContent: ', this.fileContent);
    };
    reader.onerror = () => {
      alert(file.name + ' is not loadable!');
    };
  }

}
