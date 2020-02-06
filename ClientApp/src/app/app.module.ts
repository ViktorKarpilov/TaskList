import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TaskListComponent } from './Pages/TaskPage/task-list/task-list.component';
import { TaskComponent } from './Pages/TaskPage/task/task.component';
import { MainComponent } from './Pages/Main/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    FetchDataComponent,
    TaskListComponent,
    TaskComponent,
    MainComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
