using System.Collections.Generic;
using System.Linq;

namespace TaskListT.Models{
    public class Task{
        string name{get;set;}
        string description{get;set;}
        bool IsDOne{get;set;}


    }
    public class TaskList{
        string name{get;set;}
        IEnumerable<Task> tasks{get;set;}

        int Lenth{get{
            return tasks.Count();
        }}
    }
}