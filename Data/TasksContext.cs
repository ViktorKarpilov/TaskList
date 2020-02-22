using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using TaskListT.Models;
using System;

namespace TaskListT.Context
{
    public class UsersContext:IdentityDbContext<User>{
        public UsersContext(DbContextOptions<UsersContext> options):base(options){
            Database.EnsureCreated();
        }


    }
    public class TodoListContext:DbContext{
        public DbSet<TODO> Tasks {get;set;}
        public DbSet<TaskList> TaskLists {get;set;}
        public TodoListContext(DbContextOptions<TodoListContext> options):base(options){
            Database.EnsureCreated();
        }

    }
}