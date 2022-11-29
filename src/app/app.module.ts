import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoAddComponent } from './to-do-add/to-do-add.component';
import { ToDoViewAllComponent } from './to-do-view-all/to-do-view-all.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http'

const myRoutes  : Routes=
[
  {
    path:"",component:ToDoAddComponent
  },
  {
    path:"viewall",component:ToDoViewAllComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ToDoAddComponent,
    ToDoViewAllComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
