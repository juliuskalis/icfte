import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-part-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  @Input() data: any;
  fileUrl: any;
  date: string | undefined;
  constructor(private sanitizer: DomSanitizer) {  }
  ngOnInit() {
    this.downloadStuff();
  }

  downloadStuff() {
    this.date = new Date().toLocaleString().replace(/:/gi, "-");
    const data = JSON.stringify(this.data);
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

}
