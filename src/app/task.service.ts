import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    let tasks = [
      { id: 1, workflowId: 'workflow-1', status: 'new', entityId: 'entityId-1', userId: 'user-1', url: 'http://www.google.com/', date: '2019-03-19', type: 'Entity approval' },
      { id: 2, workflowId: 'workflow-2', status: 'new', entityId: 'entityId-2', userId: 'user-2', url: 'http://www.google.com/', date: '2019-03-19', type: 'Entity approval' }
    ];
    return of(tasks);
  }
}
