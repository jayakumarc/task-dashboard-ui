import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component'
import { NotificationsComponent } from './notifications/notifications.component'

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
