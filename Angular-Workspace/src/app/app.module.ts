import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { UtilModule } from './util/util.module';

import { DepotComponent } from './depot/depot.component';

const appRoutes: Routes = [
  {
    path: 'depot',
    component: DepotComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DepotComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
