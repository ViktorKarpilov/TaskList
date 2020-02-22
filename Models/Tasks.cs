using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;

namespace TaskListT.Models{
    public class TODO{
        [Key]
        public int Id{get;set;}
        string name{get;set;}
        string description{get;set;}
        enum Status:short{
            Done=2,
            Progres=1,
            TODO=0,

        }


    }
    public class TaskList{
        [Key]
        public int Id{get;set;}
        public string name{get;set;}
        
        public IEnumerable<int> tasksId{get;set;} = null!;
        
        public TaskList(string name){
            this.name=name;
        }
        public int AddTask(int taskId){
            try{
                this.tasksId.Append(taskId);
                return 1;
            }
            catch{
                return 0;
            }
        }
    }
}