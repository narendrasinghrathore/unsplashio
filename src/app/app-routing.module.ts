import {NgModule} from '@angular/core';
// import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {DashboardComponent}   from './dashboard/dashboard.component';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';
import {WeatherComponent} from './weather/weather.component';

const routes:Routes = [
  {path: 'todos', component: TodoComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: TodoDetailComponent},
  {path: 'weather', component: WeatherComponent}

];

@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  // declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
