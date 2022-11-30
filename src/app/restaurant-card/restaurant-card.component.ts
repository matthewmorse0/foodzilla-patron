import { Component, Input, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RestaurantObject } from 'src/assets/restObject';
import { TileObject } from 'src/assets/tileObject';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {
  @Input() restName: string;
  @Input() restId: number;
  @Input() restManagerId: string;
  @Input() restWaitTime: number;
  @Input() restMenuLink: string;
  @Input() restDiningTables: string;
  @Input() restFreeTables: string;
  tiles: TileObject[] = [];
  isOpen: boolean[]= [false, false, false, false, false];
  panel1 = false;
  panel2 = false;
  panel3 = false;
  panel4 = false;

  allRests: RestaurantObject;
  title = 'foodzilla-patron';

  async ngOnInit () {
    this.loadTables();
  }

  setOpen1(event: any){
    this.isOpen[1] = true;
    console.log('asg')
  }

  setOpen2(event: any){
    this.isOpen[2] = true;
    console.log('2')
  }

  setOpen3(event: any){
    this.isOpen[3] = true;
  }

  setOpen4(event: any){
    this.isOpen[4] = true;
  }

  private async loadTables() {
    this.tiles = [];
    let diningTables: string[] = [...this.restDiningTables];
    let openTables: string[] = [...this.restFreeTables];
    for(let i = 0; i < diningTables.length; i++) {
      if(diningTables[i] != "0" && diningTables[i] != "|") {
        if(diningTables[i]!= "0" && openTables[i] == "1") {
          this.tiles.push({seats: diningTables[i], color: "green"});
        }
        else {
          this.tiles.push({seats: diningTables[i], color: "red"});
        }
      }
      else {
        this.tiles.push({seats: "", color: "white"});
      }
    }
  }
}
