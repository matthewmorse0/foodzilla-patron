export { Component} from '@angular/core';
 @Component ({
    selector= 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
 })
 export class AppComponent{
    title = 'angular-text-search- highlight';
    searchText = '';
    restaurants = [
'Budys',
'Mango Garden',
'Tempura Hut',
'MacReynalds',
'Jennys',
'Black Jack',
'Muchies',
'London Wings',
'Bagelly',
'Funkin Donuts',
...
    ]
}
   
