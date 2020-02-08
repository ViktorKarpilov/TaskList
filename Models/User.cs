using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace TaskListT.Models
{
    public class User : IdentityUser
    {
        private string email {get;set;}
        //[Required]
        //private int CompanyName {get; set;} //TODO complete bd 
        private int NumberComplitedTasks { get; set; } = 0;

        /*public User(string email){
            this.email = email;
            
        }*/
    }
}