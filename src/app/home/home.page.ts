import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  count: number = 0;
  constructor() {}

  public start() : void {}

  public stop() : void {}
}
