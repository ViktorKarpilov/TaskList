namespace TaskListT.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    //using Microsoft.Extensions.Logging;
    using System.Collections.Generic;
    using Models;
    using Context;
    using Microsoft.AspNetCore.Identity;
    using System.Threading.Tasks;
    using System;

    

    [ApiController]
    [Route("/api")]
    public class ApiTasks:Controller
    {

        private readonly TodoListContext _todoContext;
        private readonly CompanyContext _companiesContext;
        private readonly UsersContext _usersContext;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        //private readonly ILogger<ApiTasks> logger;

        public  ApiTasks(TodoListContext context_t,CompanyContext conetx_c,
        UsersContext context_u,UserManager<User> userManager,
         SignInManager<User> signInManager){
            this._todoContext = context_t;
            this._companiesContext = conetx_c;
            this._usersContext = context_u;
            this._userManager = userManager;
            this._signInManager = signInManager;
            //this.logger = loger;
        }

        //[HttpGet]
        //[Route("api/test")]
        public int GetUserLists(){
            return 1;
        }

        public StatusCodeResult PostTask(TODO task){
            return StatusCode(302);
        }
        [HttpGet]
        [Route("test")]
        public string Get(){
            return "works!";
        }
        
        [HttpPost]
        [Route("userRegistration")]
        public async Task<StatusCodeResult> UserRegistration([FromBody]PostModelUser postUser){
        
            User user = new User();
            user.UserName = postUser.username;
            user.Email = postUser.email;
            
            var res = await _userManager.CreateAsync(user,postUser.password);
            if(res.Succeeded){
                return StatusCode(200);
            }
            return StatusCode(500);
        }

        [HttpPost]
        [Route("userLogin")]
        public async Task<StatusCodeResult> UserLogn( string username,string password){
            var res = await _signInManager.PasswordSignInAsync(username,password,false,false);
            if(res.Succeeded){
                return StatusCode(200);
            }
            return StatusCode(401);
        }


        
        [HttpPost]
        [Route("createTaskList")]
        public StatusCodeResult CreateTaskList([FromBody] TaskListPost post){
            
            return StatusCode(418);
        }
    }
    
    
}

