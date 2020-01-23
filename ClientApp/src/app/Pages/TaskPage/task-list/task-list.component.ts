import { Component, OnInit, Inject } from '@angular/core';
import {TaskList} from "src/Models/TaskList";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasklist:TaskList[];
  private url = Inject('BASE_URL')+'example';

  constructor(http: HttpClient) {
    http.get<TaskList[]>(this.url).subscribe(res => this.tasklist=res,error => console.error(error));
   }

  ngOnInit() {
  }

}
