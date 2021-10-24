import { Component } from '@angular/core';
import { Pedometer } from '@ionic-native/pedometer/ngx';
import { Subscription } from 'rxjs';
import { IPedometerData } from '@ionic-native/pedometer';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  goal=10000;
  startCount: Boolean = true;
  btnText: String = "START";
  stepsCount: number = 0;
  currentTime: number;
  timeElapsed: number;
  interval: any;
  pedometerSubscription: Subscription;

  stepsLeft: number =0;
   

  constructor( private pedometer: Pedometer ) {}

  public start() : void {
    console.log("start");

    try {
      

        console.log("Counting steps");
        this.btnText = "STOP";

        this.stepsCount = 0; // Reseting the steps counter

        this.currentTime = new Date().getTime();
        this.interval = setInterval(() => {
          this.timeElapsed = new Date().getTime() - 43200000 - (+this.currentTime); // Removing timezone hours
        }, 1000);


        console.log("this.currentTime:  " +this.currentTime);

        //check if pedometer is available
        this.pedometer.isStepCountingAvailable().then((result) => {
          console.log(`Counting available: ${result}`);
        })
        

        this.pedometerSubscription = this.pedometer.startPedometerUpdates()
        .subscribe((data: IPedometerData) => {
          console.log( "steps: " + data.numberOfSteps);
          this.stepsCount = data.numberOfSteps;
          this.stepsLeft = this.goal - this.stepsCount;
        });
      
        console.log( "this.stepsCount: " + this.stepsCount);
        console.log( "this.stepsLeft: " + this.stepsLeft);

    
  } catch (error) {
    console.log("error: " + error);
  }
 

  }

  public stop() : void {
    console.log("stop");
    
    console.log( "this.stepsCount: " + this.stepsCount);
    console.log( "this.stepsLeft: " + this.stepsLeft);
     
    clearInterval(this.interval);
    this.stepsLeft=this.goal;//restart steps left counter
      
    this.pedometerSubscription.unsubscribe();
 
  }



  toggleCountSteps() {

    try {
        if(this.startCount === true) {

          console.log("Counting steps");
          this.btnText = "STOP";

          this.stepsCount = 0; // Reseting the steps counter

          this.currentTime = new Date().getTime();
          this.interval = setInterval(() => {
            this.timeElapsed = new Date().getTime() - 23400000 - (+this.currentTime); // Removing timezone hours
          }, 1000);

          this.pedometer.isStepCountingAvailable().then((result) => {
            console.log(`Counting available: ${result}`);
          })
          

          this.pedometerSubscription = this.pedometer.startPedometerUpdates()
          .subscribe((data: IPedometerData) => {
            console.log( "steps: " + data.numberOfSteps);
            this.stepsCount = data.numberOfSteps;
            this.stepsLeft = this.goal - this.stepsCount;
          });
        
          console.log( "this.stepsCount: " + this.stepsCount);
          console.log( "this.stepsLeft: " + this.stepsLeft);


          this.startCount = false;

        }
        else{

          this.btnText = "START";
          clearInterval(this.interval);
          this.startCount = true;
          this.pedometerSubscription.unsubscribe();

        }
      
    } catch (error) {
      console.log("error: " + error);
    }
   }

}
