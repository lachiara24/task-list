import { Component, OnInit} from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService){  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (
      this.tasks = tasks
    ));
  }

  deleteTask(task: Task){
    console.log(task.id);
    this.taskService.deleteTask(task)
      .subscribe(
        () => (
          this.tasks = this.tasks.filter( t => {
            return t.id !== task.id
          })
      ))
  }

  toggleTask(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task)
    });
  }

}
