import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  uploadImage(fileToUpload: File) {
    const endpoint = 'https://serene-hollows-11661.herokuapp.com/api/v1/upload';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData);
  }

}
