import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  myReader: FileReader = new FileReader();
  constructor() { }

  ngOnInit() {
  }

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
    // this.myReader.onloadend = () => {
    //   console.log(this.myReader.result);
    // }
  }


}
