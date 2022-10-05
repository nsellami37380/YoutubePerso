import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoDetail } from './models/video-detail.model';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoDetailService {

   private _videoDetailList: VideoDetail[] = [];

  public filterTitle: string = "1";
  constructor(public http: HttpClient) { }

  getVideoDetails() : Observable<VideoDetail[]>{
    alert(this.filterTitle);
    return this.http.get<VideoDetail[]>("assets/video-detail.json").pipe(
      map(videoDetails => videoDetails.filter(videoDetail => videoDetail.title.indexOf(this.filterTitle)>=0)
    ))
    
  }
}
