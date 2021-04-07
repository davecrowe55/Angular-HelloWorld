import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import * as appPractice from './app.practice';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    appPractice.CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, appPractice.CoursesComponent]
})
export class AppModule { }
