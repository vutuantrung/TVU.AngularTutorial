import { CoursesService } from './courses/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  // declaration: this is where we add all the components that are part if this module
  declarations: [
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // provider: we need to implement all the dependencies that components in this module
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
