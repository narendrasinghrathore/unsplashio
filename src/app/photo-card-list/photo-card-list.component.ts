import {Component, OnInit, Input, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogImageDetailComponent} from '../dialog-image-detail/dialog-image-detail.component';
import {CustomHttpServiceService} from '../custom-http-service.service';
@Component({
  selector: 'app-photo-card-list',
  templateUrl: './photo-card-list.component.html',
  styleUrls: ['./photo-card-list.component.css']
})
export class PhotoCardListComponent implements OnInit {

  @Input() photoList:any;

  let
  photoGrid = {
    col: {
      size: 4
    },
    row: {
      height: "4:2"
    },
    tile: {
      rowspan: function () {
        // return Math.floor((Math.random() * 2) + 1);
        return 2;
      }
    },
    gutterSize: 5
  }

  name:string = "Naren";
  animal:string = "Pokemon";

  constructor(public dialog:MatDialog, private http:CustomHttpServiceService) {
  }


  ngOnInit() {

  }

  ngAfterViewInit() {
    this.http.getSampleData().subscribe(data => {
      console.log(data);
      this.photoList = data;
    })
  }

  openDialog(data:any):void {
    let dialogRef = this.dialog.open(DialogImageDetailComponent, {
      width: '80%',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed with ouput: ${result}`);
      this.animal = result;
    });
  }


  getWidth(imageId: string):any {
    var img = document.getElementById(imageId);
    return img
  }
}
