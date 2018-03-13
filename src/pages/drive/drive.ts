import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../../app/service';

@Component({
  selector: 'page-drive',
  templateUrl: 'drive.html',
  providers: [Service]
})
export class DrivePage {

  public buttonText: string
  public buttonColor: string
  public driving: boolean

  constructor(public navCtrl: NavController, private service: Service) {
    this.buttonText = 'Start Recording'
    this.buttonColor = '#32db64'
    this.driving = false
  }

  public onClick() {
    if (!this.driving) {
      this.buttonText = 'Stop Recording'
      this.buttonColor = '#f53d3d'
      this.driving = true
      this.service.startRecording();
      
    } else {
      this.buttonText = 'Start Recording'
      this.buttonColor = '#32db64'
      this.driving = false
      this.service.stopRecording();
    }
  }


}

