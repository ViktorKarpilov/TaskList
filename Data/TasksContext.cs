using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using TaskListT.Models;
using System;

namespace TaskListT.Context
{
    public class UsersContext:IdentityDbContext{
        public UsersContext(DbContextOptions<UsersContext> options):base(options){
            Database.EnsureCreated();
        }


    }
    public class TodoListContext:DbContext{
        DbSet<Task> Tasks;
        public TodoListContext(DbContextOptions<TodoListContext> options):base(options){
            Database.EnsureCreated();
        }

    }
}