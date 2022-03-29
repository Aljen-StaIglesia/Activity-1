import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstnavComponent } from './pages/firstnav/firstnav.component';
import { SecondnavComponent } from './pages/secondnav/secondnav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list"


const routes: Routes =[
  {path: 'firstnav', component:FirstnavComponent},
  {path: 'secondnav', component:SecondnavComponent},

  {path: "**", redirectTo: 'firstnav'}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstnavComponent,
    SecondnavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule. forRoot(
      routes
    ),
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
