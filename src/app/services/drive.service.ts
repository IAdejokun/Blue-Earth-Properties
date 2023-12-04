import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, forkJoin} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriveService {

  private readonly apiUrl = 'https://www.googleapis.com/drive/v3/files';
  private readonly apiKey = 'AIzaSyD98vTYLGcjHQmQAdnsVG_9cECIInTqd9M';


  constructor(private http:HttpClient) { }

  getImages(fileIds: string[]): Observable<any[]> {
    const requests: Observable<any>[] = fileIds.map((fileId) => {
      const url = `${this.apiUrl}/${fileId}?alt=media&key=${this.apiKey}`;
      return this.http.get(url);
    });

    return forkJoin(requests)
  }

}
