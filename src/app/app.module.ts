import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoAddComponent } from './to-do-add/to-do-add.component';
import { ToDoViewAllComponent } from './to-do-view-all/to-do-view-all.component';
import { NavbarComponent } from './navbar/navbar.component';

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
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
