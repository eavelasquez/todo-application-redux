import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
/** NgRx */
import { appReducers } from './app.reducer';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/** Components */
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
/** TODO components */
import { TodoComponent } from './todo/todo.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodoAddComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoFooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
