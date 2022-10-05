import { Component } from '@angular/core';
import { VideoDetail } from './models/video-detail.model';
import { VideoDetailService } from './video-detail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'YoutubePerso';

  VideoDetailList : VideoDetail[] = [];

  constructor(private _videoDetailService: VideoDetailService) { }

  ngOnInit(): void {
    this.getVideoDetailsList();
  }

  getVideoDetailsList(): void{

    this._videoDetailService.getVideoDetails().subscribe(v => {
      console.log(v);
      
      this.VideoDetailList = v;
    })



  }
}
