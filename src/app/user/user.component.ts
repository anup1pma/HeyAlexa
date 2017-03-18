import { Component } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './user.component.html',
  styleUrls: ['./../../assets/bootstrap.css']
})
export class UserComponent {
  private communities = ['Smart Home','Shopping' ,'Contest community', 'News', 'Daily', 'Education', 'Weather', 'Stocks','Lifestyle', 'Gaming', 'Music','Sports','Automobile', 'Business'];
}
