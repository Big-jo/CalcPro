import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeModule } from '@circlon/angular-tree-component';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { FoodComponent } from './components/food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    WorkspaceComponent,
    FoodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'food', component: FoodComponent },
      { path: 'non-scientific', component: CalculatorComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
