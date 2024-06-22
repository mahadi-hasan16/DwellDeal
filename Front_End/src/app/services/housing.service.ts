import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private httpClient : HttpClient) { }
getAllProperties(){
  return this.httpClient.get('data/properties.json');
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
}
