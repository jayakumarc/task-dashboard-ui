import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { EntityDetailComponent } from './entity-detail/entity-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NotificationsComponent,
    EntityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
