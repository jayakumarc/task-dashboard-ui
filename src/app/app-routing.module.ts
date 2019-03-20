import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component'
import { NotificationsComponent } from './notifications/notifications.component'
import { EntityDetailComponent } from './entity-detail/entity-detail.component'

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },

  { path: 'entity-detail/:id', component: EntityDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
