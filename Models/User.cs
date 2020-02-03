using Microsoft.AspNetCore.Identity;

namespace TaskListT.Models
{
    public class User : IdentityUser
    {
        public string CompanyName {get; set;} //TODO complete bd 
        public int NumberComplitedTasks { get; set; }
    }
}