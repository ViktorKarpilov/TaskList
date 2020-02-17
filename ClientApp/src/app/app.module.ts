import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TaskListComponent } from './Pages/TaskPage/task-list/task-list.component';
import { TaskComponent } from './Pages/TaskPage/task/task.component';
import { MainComponent } from './Pages/Main/main/main.component';
import { IdentityModule } from './identity/identity.module';
import { HeaderComponent } from './Header/header/header.component';
import { RegistrationComponent } from './identity/Registration/registration/registration.component';
import { IdentityComponent } from './identity/identity/identity.component';
import { LoginComponent } from './identity/login/login.component';
import { TaskPageComponent } from './Pages/TaskPage/task-page/task-page.component';
import { TaskListCreateComponent } from './Pages/TaskPage/task-list-create/task-list-create.component';

const identityRoutes:Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
]

const taskRoutes:Routes = [
  { path: 'tasklists',component: MainComponent},
  { path: 'taskList/:name',component: TaskListComponent},
  { path: 'create',component: TaskListCreateComponent}
]

const mainRouts: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'identity', component: IdentityComponent,children:identityRoutes },
  { path: 'tasks', component:TaskPageComponent,children:taskRoutes },
  
]

@NgModule({
  declarations: [
    AppComponent,
    FetchDataComponent,
    TaskListComponent,
    TaskComponent,
    MainComponent,
    HeaderComponent,
    TaskPageComponent,
    TaskListCreateComponent,
  ],
  imports: [
    IdentityModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(mainRouts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
