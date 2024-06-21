import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private httpClient : HttpClient) { }
getAllProperties(){
  return this.httpClient.get('data/properties.json');
}
}
