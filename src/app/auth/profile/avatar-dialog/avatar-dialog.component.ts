import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-avatar-dialog',
  templateUrl: './avatar-dialog.component.html',
  styleUrls: ['./avatar-dialog.component.css'],
})
export class AvatarDialogComponent implements OnInit {
  avatars: Array<any> = new Array<any>();

  constructor(
    public dialogRef: MatDialogRef<AvatarDialogComponent>,
    public firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.firebaseService
      .getAvatars()
      .subscribe((data) => (this.avatars = data));
  }

  close(avatar) {
    this.dialogRef.close(avatar);
  }
}
