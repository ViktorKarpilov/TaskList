import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../../../Models/TaskList';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-list-create',
  templateUrl: './task-list-create.component.html',
  styleUrls: ['./task-list-create.component.css']
})
export class TaskListCreateComponent implements OnInit {
  List = new TaskList();

  constructor(private http:HttpClient) {  }

  ngOnInit() {
  }

  CreateList(){
    console.log(this.List.Title);
    console.log(this.List.Description);
    this.http.post("api/createTaskList",{"Title":this.List.Title,"Description":this.List.Description})
    .subscribe(status=>console.log(status));
  }
}
