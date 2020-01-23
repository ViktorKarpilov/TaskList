using System.Collections.Generic;
using System.Linq;

namespace TaskListT.Models{
    public class Task{
        int Id{get;set;}
        string name{get;set;}
        string description{get;set;}
        enum Status:short{
            Done=2,
            Progres=1,
            TODO=0,

        }


    }
    public class TaskList{
        string name{get;set;}
        IEnumerable<int> tasksId{get;set;}
    }
}