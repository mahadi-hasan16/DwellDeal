/*using Microsoft.AspNetCore.Diagnostics;
using System.Net;

namespace DwellDeal.Extentions
{
    public static class ExceptionMiddlewareExtension
    {
        public static void ConfigureExceptionHandler(this IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            else
            {
                app.UseExceptionHandler(options =>
                options.Run(async httpContext =>
                {
                    httpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    var exception = httpContext.Features.Get<IExceptionHandlerFeature>();
                    if (exception is not null)
                    {
                        await httpContext.Response.WriteAsync(exception.Error.Message);
                    }
                }
                )
                );
            }
        }
    }
}*/
