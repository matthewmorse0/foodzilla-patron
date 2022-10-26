import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RestaurantObject } from 'src/assets/restObject';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {

  rest1: RestaurantObject;
  title = 'foodzilla-patron';

  async ngOnInit () {
    this.getRests();
  }

  private async getRests() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5000/get_all_info");
    xhr.send();
    xhr.onload = () => 
    {
      var data = xhr.responseText;
      var response = JSON.parse(data)
      this.rest1 = response.restaurants[0] as RestaurantObject
      this.rest1.name = this.rest1[0].toString();
      this.rest1.id = this.rest1[1]
      this.rest1.managerId = this.rest1[2]
      this.rest1.waitTime = this.rest1[3]
      this.rest1.menuLink = this.rest1[4]
      this.rest1.diningTables = this.rest1[5]
      this.rest1.freeTables = this.rest1[6]
      console.log(this.rest1);
    }
  }
}
