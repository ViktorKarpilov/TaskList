using Microsoft.EntityFrameworkCore;
using TaskListT.Models;
using System;

namespace TaskListT.Context{
    public class CompanyContext:DbContext{
        DbSet<Company> Companies;
        public CompanyContext(DbContextOptions<CompanyContext> options):base(options){
            Database.EnsureCreated();
        } 
    }
}