import { Component, OnInit ,Inject} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-dialog-image-detail',
  templateUrl: './dialog-image-detail.component.html',
  styleUrls: ['./dialog-image-detail.component.css']
})
export class DialogImageDetailComponent implements OnInit {

  downloadResolutions:string[] = ["lo:res","med:res","hi:res"];

  constructor(public dialogRef: MatDialogRef<DialogImageDetailComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(){
    this.dialogRef.close(this.data.animal);
  }



}
