using System.Net;
using DwellDeal.Errors;
using Microsoft.AspNetCore.Http;

namespace DwellDeal.Middlewares
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;

        private readonly ILogger<Exception> _logger;

        private readonly IHostEnvironment _env;
        public ExceptionMiddleware(
            RequestDelegate next, 
            ILogger<Exception>logger,
            IHostEnvironment env)
        {
            _next = next;
            _logger = logger;
            _env = env;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch(Exception exception)
            {
                ApiErrors error;
                int statusCode = (int)HttpStatusCode.InternalServerError;

                if(_env.IsDevelopment())
                {
                    error = new ApiErrors(statusCode, exception.Message, exception.StackTrace.ToString());
                }
                else
                {
                    error = new ApiErrors(statusCode, exception.Message);
                }

                _logger.LogError(exception, exception.Message);
                httpContext.Response.StatusCode = statusCode;
                httpContext.Response.ContentType = "application/json";
                await httpContext.Response.WriteAsync(error.ToString());
            }
        }
    }
}
