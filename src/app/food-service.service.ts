import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  constructor(private http: HttpClient) {}

  GetFood(searchTerm) {
    return this.http.get(
      ` https://api.spoonacular.com/food/products/search?query=${searchTerm}&apiKey=c277a5563b9440269cc75a7e7cf2b8dd`
    );
  }
}
