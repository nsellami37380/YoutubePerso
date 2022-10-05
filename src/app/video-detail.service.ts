import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoDetail } from './models/video-detail.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoDetailService {

  private _videoDetailList: VideoDetail[] = [];

  constructor(public http: HttpClient) { }

  getVideoDetails() : Observable<VideoDetail[]>{
    return this.http.get<VideoDetail[]>("assets/video-detail.json")
  }
}
