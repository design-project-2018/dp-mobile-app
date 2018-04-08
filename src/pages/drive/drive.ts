import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DriveService } from '../../services/drive.service'

@Component({
  selector: 'page-drive',
  templateUrl: 'drive.html',
  providers: [DriveService]
})
export class DrivePage {

  public buttonText: string
  public recordMessage: string
  public buttonColor: string
  public driving: boolean

  constructor(public navCtrl: NavController, private driveService: DriveService) {
    this.buttonText = 'Start Recording'
    this.recordMessage = ''
    this.buttonColor = '#32db64'
    this.driving = false
  }

  public onClick() {
    if (!this.driving) {
      this.buttonText = 'Stop Recording'
      this.buttonColor = '#f53d3d'
      this.driving = true
      this.recordMessage = 'Recording In Progress ...'
      this.driveService.startRecording()
        .subscribe(result => {
          console.log(result)
        }, error => {
          console.log(error)
        })

    } else {
      this.buttonText = 'Start Recording'
      this.buttonColor = '#32db64'
      this.driving = false
      this.recordMessage = ''
      this.driveService.stopRecording()
        .subscribe(result => {
          console.log(result)
        }, error => {
          console.log(error)
        })
    }
  }


}

