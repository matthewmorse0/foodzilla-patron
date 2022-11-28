import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { RestaurantObject } from 'src/assets/restObject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  allRests: RestaurantObject[];


  title = 'foodzilla-patron';
  constructor(private http: HttpClient) {}

  async ngOnInit () {
    this.getRests();
  }
  
  getConfigResponse(): Observable<RestaurantObject> {
    return this.http.get<RestaurantObject>(
      "http://127.0.0.1:5000/get_all_info")
  }


  private async getRests() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5000/get_all_info");
    xhr.send();
    xhr.onload = () => 
    {
      var data = xhr.responseText;
      var response = JSON.parse(data)
      this.allRests = response.restaurants;
      console.log(this.allRests)
    }
    // let title = 'Search Restaurant';
    // let searchText;
    // let restaurant = [
    //   id:1, restaurant :King Street Pub
    //   id:2, restaurant: Chilis
    //   id:3, restaurant: Olive Garden 
    //   id:4, restaurant: Dions
    // ];
  }
}
 