using System.Net;
using DwellDeal.Data;
using DwellDeal.Data.Repository;
using DwellDeal.Helpers;
using DwellDeal.Interfaces;
using DwellDeal.Middlewares;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<ApplicationDbContext>(options =>

    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnectionString"))
);

builder.Services.AddCors(
    options =>{
        options.AddPolicy("AllowAll",policy =>{
                policy.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            }
        );}
);

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

builder.Services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}
/*else
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseExceptionHandler(options =>
    options.Run(async httpContext =>
    {
        httpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
        var exception = httpContext.Features.Get<IExceptionHandlerFeature>();
        if(exception is not null)
        {
            await httpContext.Response.WriteAsync(exception.Error.Message);
        }
    }
    )
    );
}*/


app.UseMiddleware<ExceptionMiddleware>();

app.UseRouting();

app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
