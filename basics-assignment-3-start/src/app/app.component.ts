import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetail = true;
  clickTimes = 0;
  clickArray = [0];
  onDisplayDetail(){
    this.displayDetail = !this.displayDetail;
    this.clickTimes++;
    this.clickArray.push(this.clickTimes);
  }
  getColor(){
    return this.clickTimes > 5? 'blue' : '';
  }
}
