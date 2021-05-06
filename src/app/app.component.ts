import { Component } from '@angular/core';
import {
  TREE_ACTIONS,
  KEYS,
  IActionMapping,
} from '@circlon/angular-tree-component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nodes = [
    {
      id: 'calculators',
      name: 'Calculators',
      children: [
        {
          id: 'non-scientific',
          name: 'Non Scientific',
        },
        {
          id: 'food-prices',
          name: 'Food Prices',
        },
        {
          id: 'building',
          name: 'Building',
        },
      ],
    },
  ];

  constructor(private router: Router) {}

  public onSelectNode({
    node: {
      data: { id, name },
    },
  }) {
    this.router.navigateByUrl(id);
  }

  options = {};
}
