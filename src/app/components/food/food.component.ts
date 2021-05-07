import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../../food-service.service';

interface Result {
  products: any[];
}

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent implements OnInit {
  searchTerm;
  products = [];
  constructor(private foodService: FoodServiceService) {}

  ngOnInit(): void {}

  Search(term: string) {
    this.foodService.GetFood(term).subscribe((result: Result) => {
      this.products = result.products.splice(0, 4);
    });
  }
}
