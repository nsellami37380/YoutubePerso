import { Component, OnInit } from '@angular/core';
import { VideoDetailService } from '../video-detail.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private _videoDetailService: VideoDetailService) { } 

  ngOnInit(): void {
  }
  searchClick(): void{
    this._videoDetailService.filterTitle = "2";
    this._videoDetailService.getVideoDetails();
  }

}
