import { Component, Input, OnInit } from '@angular/core';
import { VideoDetail } from '../models/video-detail.model';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {

  
  @Input()
   video: VideoDetail = new VideoDetail("", "","")
   
  constructor() { }

  ngOnInit(): void {
  }

}
