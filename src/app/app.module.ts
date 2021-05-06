import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeModule } from '@circlon/angular-tree-component';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';

@NgModule({
  declarations: [AppComponent, CalculatorComponent, WorkspaceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'non-scientific', component: CalculatorComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
