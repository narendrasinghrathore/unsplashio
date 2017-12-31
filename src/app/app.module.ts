import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import {CustomHttpServiceService} from './custom-http-service.service';
import {AuthService} from './auth-service.service';
import {AuthInterceptor} from './class/auth-interceptor';

import { TodoItemService } from './todo-item.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MaterialModule} from './design-components/material-angular';
import { WeatherComponent } from './weather/weather.component';
import { PhotoCardListComponent } from './photo-card-list/photo-card-list.component';
import { DialogImageDetailComponent } from './dialog-image-detail/dialog-image-detail.component';





// Angular needs to know how the pieces of your application fit together and what other files and libraries the app requires. This information is called metadata
// Some of the metadata is in the @Component decorators that you added to your component classes. Other critical metadata is in @NgModule decorators.
//
//   The most important @NgModuledecorator annotates the top-level AppModule class.
//
// The Angular CLI generated an AppModule class in src/app/app.module.ts when it created the project. This is where you opt-in to the FormsModule.


// Every component must be declared in exactly one NgModule.
//
//   You didn't declare the HeroesComponent. So why did the application work?
//
// It worked because the Angular CLI declared HeroesComponent in the AppModule when it generated that component.
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoDetailComponent,
    MessagesComponent,
    DashboardComponent,
    WeatherComponent,
    PhotoCardListComponent,
    DialogImageDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  entryComponents: [
    DialogImageDetailComponent
  ],
  providers: [TodoItemService, MessageService,CustomHttpServiceService,AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
