import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './component/todos/todos.component';
import { TodoItemComponent } from './component/todo-item/todo-item.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { AboutComponent } from './component/pages/about/about.component';

@NgModule({
  // Components go in declarations
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
      FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
