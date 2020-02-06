using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TaskListT.Models{
    public class Company{
        [Key]
        private int Id{get;set;}
        string CompanyName {get;set;}
        IEnumerable<int> Users{get;set;}

    }
}