using Microsoft.EntityFrameworkCore;
using TaskListT.Models;

namespace TaskListT.Context
{
    public class TodoListContext:DbContext{
        DbSet<Task> Tasks;
        public TodoListContext(DbContextOptions<TodoListContext> options):base(options){

        }

    }
}