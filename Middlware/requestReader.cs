using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using System;

namespace TaskListT.Middlware
{
    public class requestReader
    {   
        private readonly RequestDelegate _next;
        public requestReader(RequestDelegate next){
            this._next = next;
        }
        public async Task InvokeAsync(HttpRequest request){
            Console.WriteLine(request.Body);
         /*   await _next.Invoke(request);*/
        }
    }
}