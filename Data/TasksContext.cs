using Microsoft.EntityFrameworkCore;
using TaskListT.Models;

namespace TaskListT.Context{
    public class TasksContext:DbContext{
        DbSet<Task> Tasks;
        public TasksContext(){

        }

    }
}