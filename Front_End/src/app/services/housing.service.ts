import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Property } from '../models/Property';
import { environment } from '../../environments/environment';
import { IKeyValuePair } from '../models/IKeyValuePair';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
// ------------End Points---------------
baseUrl = environment.baseUrl;
allProperties = environment.getAllProperties;
propertyDetail = this.baseUrl + environment.getPropertyDetail;
propertyTypes = this.baseUrl + environment.getPropertyTypes;
furnishingTypes = this.baseUrl + environment.getFurnishingTypes;

// ----------------------------------------------
constructor(private httpClient : HttpClient) { }

getAllCities(): Observable<any>{
  return this.httpClient.get('http://localhost:5172/api/city/');
}

getAllProperties(sellRent: number): Observable<Property[]>{
  return this.httpClient.get<Property[]>(this.baseUrl + this.allProperties + sellRent.toString());
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

getPropertyDetail(id: number): Observable<Property>{
  return this.httpClient.get<Property>(this.propertyDetail + id.toString());
}

getPropertyAge(dateOfEstablishment: Date): string{
  const today = new Date();
  const estDate = new Date(dateOfEstablishment);
  let age = today.getFullYear() - estDate.getFullYear();
  const m = today.getMonth() - estDate.getMonth();

  if(m<0 || (m == 0 && today.getDate() < estDate.getDate())){
    age --;
  }

  if(today < estDate){
    return '0';
  }

  if(age === 0){
    return "Less than a year";
  }

  return age.toString();
}

getPropertyTypes(): Observable<IKeyValuePair[]>{
  return this.httpClient.get<IKeyValuePair[]>(this.propertyTypes);
}

getFurnisihingTypes(): Observable<IKeyValuePair[]>{
  return this.httpClient.get<IKeyValuePair[]>(this.furnishingTypes);
}

addProperty(property: Property){
  localStorage.setItem('newProp', JSON.stringify(property));
}

}
