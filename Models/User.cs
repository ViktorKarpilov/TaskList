using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace TaskListT.Models
{
    public class User : IdentityUser
    {
        [Required]
        private int CompanyName {get; set;} //TODO complete bd 
        private int NumberComplitedTasks { get; set; }
    }
}