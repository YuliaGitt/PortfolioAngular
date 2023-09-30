import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Education, Project } from './portfolio/portfolio-models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 65a88720684a1426e3a671b4d718f153a5c36fd3',
  });

  constructor(private httpClient: HttpClient) {}

  get_skills() {
    return this.httpClient.get(`${this.baseUrl}project/skill/`);
  }

  get_products() {
    return this.httpClient.get(`${this.baseUrl}shop/product/`);
  }
  get_cart_items() {
    return this.httpClient.get(`${this.baseUrl}shop/cart/`, {
      headers: this.headers,
    });
  }

  get_jokes() {
    return this.httpClient.get(`${this.baseUrl}blog/joke/`);
  }
  get_locations() {
    return this.httpClient.get(`${this.baseUrl}blog/location/`);
  }
}
