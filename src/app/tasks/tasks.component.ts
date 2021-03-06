import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[]
  incompleteTasks: Task[]

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks()
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.incompleteTasks = tasks.filter(t => t.status !== 'completed');
    });
  }

  openUrl(task: Task): void {
    window.open(task.url, '_blank');
  }

}
