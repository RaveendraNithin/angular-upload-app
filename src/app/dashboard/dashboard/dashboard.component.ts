import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fileUploaded: boolean = false;
  fileToUpload: File;
  filePath: any;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFile() {
    this.dashboardService.uploadImage(this.fileToUpload)
      .subscribe((result) => {
        // upload success
        console.log(result);
        this.fileUploaded = true;
        this.filePath = result['path'];
      },
        (error) => {
          console.log(error);
        });
  }

}
