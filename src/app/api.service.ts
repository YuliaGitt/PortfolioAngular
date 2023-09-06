import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/';
  headers = new HttpHeaders({
    'Content-Type': 'applocation/json',
    Authorizaton: 'Token ',
  });

  constructor(private httpClient: HttpClient) {}

  get_educations() {
    return this.httpClient.get(`${this.baseUrl}projects/education/`);
  }
  get_projects() {
    return this.httpClient.get(`${this.baseUrl}projects/project/`);
  }
  get_skills() {
    return this.httpClient.get(`${this.baseUrl}projects/skill/`);
  }

  get_products() {
    return this.httpClient.get(`${this.baseUrl}shop/product`);
  }
  get_cart_items() {
    return this.httpClient.get(`${this.baseUrl}shop/cart/`);
  }

  get_jokes() {
    return this.httpClient.get(`${this.baseUrl}blog/joke/`);
  }
  get_locations() {
    return this.httpClient.get(`${this.baseUrl}blog/location/`);
  }
}
