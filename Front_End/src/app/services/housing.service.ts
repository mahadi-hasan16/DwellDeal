import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Property } from '../models/Property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private httpClient : HttpClient) { }

getAllCities(): Observable<any>{
  return this.httpClient.get('http://localhost:5172/api/city/');
}

getAllProperties(){
  return this.httpClient.get('./../../data/properties.json');
  // .pipe(
  //   map((data)=>{
  //     const properties: Array<any> = [];
  //     for(const i in data){
  //       if(data.hasOwnProperty(i)){
  //         properties.push(data[i as keyof Object]);
  //       }
  //       else {return;}
  //       return properties;
  //     }
  //   })
  // );
}

addProperty(property: Property){
  localStorage.setItem('newProp', JSON.stringify(property));
}

}
