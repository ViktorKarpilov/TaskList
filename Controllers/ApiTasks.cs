namespace TaskListT.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using Models;
    using Context;
    using Microsoft.AspNetCore.Identity;

    [ApiController]
    [Route("/api")]
    public class ApiTasks:Controller
    {

        private readonly TodoListContext _todoContext;
        private readonly CompanyContext _companiesContext;
        private readonly UsersContext _usersContext;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public  ApiTasks(TodoListContext context_t,CompanyContext conetx_c,UsersContext context_u,UserManager<User> userManager, SignInManager<User> signInManager){
            this._todoContext = context_t;
            this._companiesContext = conetx_c;
            this._usersContext = context_u;
            this._userManager = userManager;
            this._signInManager = signInManager;
        }

        [HttpGet("api/getLists")]
        public int GetUserLists(){
            return 1;
        }

        public StatusCodeResult PostTask(Task task){
            return StatusCode(302);
        }
        [HttpGet]
        public string Get(){
            return "works!";
        }
    }
}

