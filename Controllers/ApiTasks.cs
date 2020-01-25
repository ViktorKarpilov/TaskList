namespace TaskListT.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using Models;
    using Context;

    [ApiController]
    [Route("/api")]
    public class ApiTasks:Controller
    {

        private readonly TodoListContext context;
        public  ApiTasks(TodoListContext context){
            this.context = context;
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

