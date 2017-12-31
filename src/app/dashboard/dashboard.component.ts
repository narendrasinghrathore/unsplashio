import { Component, OnInit } from '@angular/core';
import {CustomHttpServiceService} from '../custom-http-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //declaration of variables
  photoListData: any;
  constructor(private http:CustomHttpServiceService
  ) { }

  ngOnInit() {
  }

  getPhotos():void{
    this.http.getLatestPhotos().subscribe(data => {
      this.photoListData = data;
    })
  }

}
