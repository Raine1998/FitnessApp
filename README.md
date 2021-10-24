# FitnessApp

Uses the pedometer plugin from Ionic 
https://ionicframework.com/docs/native/pedometer
to track the steps of the user and calculate how much steps they have left before they reach their goal

This app has only been tested on ios devices. The device sensor also does not work on simulation as they do not have the sensor installed. 
For sensor readings, the app would need to be deployed onto a real ios device. 

## To deploy


### Clone the repository 
    git clone https://github.com/Raine1998/FitnessApp.git

### Navigate into the root folder
    cd FitnessApp

### Install dependencies
    npm i

### ensure everything is built for ios 
    ionic build 
    npx cap sync 
    
### Open up on xcode
    npx cap open ios

### Ensure ios device is connected to your computer  - App> (device name) and press the play button at the top of the screen. 
<img width="835" alt="Screen Shot 2021-10-24 at 11 30 15 PM" src="https://user-images.githubusercontent.com/19639864/138590059-25b5c8e7-a4b2-4f08-9b15-bd04af9ad8c5.png">

### To add a phone, ensure that your phone is connected by wire to the computer, then go to Window> Device and Simulators
<img width="323" alt="Screen Shot 2021-10-24 at 11 31 37 PM" src="https://user-images.githubusercontent.com/19639864/138590091-0bb56e1b-f3c4-4bc7-938e-ab8407fb19b6.png">

### click the add button at the bottom
<img width="556" alt="Screen Shot 2021-10-24 at 11 33 40 PM" src="https://user-images.githubusercontent.com/19639864/138590205-7ce6a1c9-7fa2-4cd6-9974-2f88d924d64c.png">

<img width="593" alt="image" src="https://user-images.githubusercontent.com/19639864/138590436-bdf8261a-1b47-4e42-8303-4b990d93454a.png">


<img width="572" alt="Screen Shot 2021-10-24 at 11 36 39 PM" src="https://user-images.githubusercontent.com/19639864/138590224-23de23ae-46bb-43a9-a450-97d261e5caab.png">


### You should get this error on your phone.
<img width="404" alt="Screen Shot 2021-10-24 at 11 39 50 PM" src="https://user-images.githubusercontent.com/19639864/138590325-61ed0624-c721-4cea-98a6-f3a70a58bb20.png">


###  we have to tell our iOS device to trust the certificate we code signed our app with.
### On your phone, go to Settings > General >  Device Management. 
![image](https://user-images.githubusercontent.com/19639864/138590353-8adb735a-5c15-4bcf-b34b-5ebabdb5d42a.png)

### You would see an email that is associated with my application: legaspi.ashley7346......
### Tap the email address and tap Trust


### Go back to Xcode and it should be able to run on your phone now.



