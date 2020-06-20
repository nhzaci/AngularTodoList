import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './component/todos/todos.component';
import { AboutComponent } from './component/pages/about/about.component';


const routes: Routes = [
    { path: '', component: TodosComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
