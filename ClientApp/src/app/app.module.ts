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

const identityRoutes:Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
]

const mainRouts: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'identity', component: IdentityComponent,children:identityRoutes },
]

@NgModule({
  declarations: [
    AppComponent,
    FetchDataComponent,
    TaskListComponent,
    TaskComponent,
    MainComponent,
    HeaderComponent,
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
