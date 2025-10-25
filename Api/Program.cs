

using System.Reflection;
using Api;
using Api.Orders.OrderEndpoints;
using Application;
using Application.Checkout;
using Application.Orders.Commands;
using Domain.OrderItems;
using Domain.Products.Entities;
using dotenv.net;
using Infrastructure;
using Infrastructure.Checkout;
using Infrastructure.Orders;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;
using MinimalApi.Endpoint.Extensions;

var builder = WebApplication.CreateBuilder(args);

DotEnv.Load();

builder.Logging.ClearProviders();
builder.Logging.AddProvider(new AppLoggerProvider());
// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddCheckout(options =>
{
    options.ApiKey = Environment.GetEnvironmentVariable("STRIPE_KEY");
    options.CallbackUrl = "http://localhost:5272";
    options.DisplayName = "Knots and Prints Co.";
    options.CancelUrl = "http://localhost:5272";
});

builder.Services.AddDbContext<AppDbContext>(options =>
{
    Console.WriteLine(Environment.GetEnvironmentVariable("DB_CONN"));
    options.UseSqlServer(Environment.GetEnvironmentVariable("DB_CONN"), opt => opt.EnableRetryOnFailure());
});

builder.Services.AddOrderServices();
builder.Services.AddApplicationCommands();
builder.Services.AddEndpoints();
// builder.Services.AddOrdeEndpoints();




var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}


app.UseHttpsRedirection();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.UseExceptionHandler(appConfig =>
{
    appConfig.Run(async context =>
    {
        var logger = appConfig.ApplicationServices.GetRequiredService<ILogger<Program>>();

        var exception = context.Features.Get<IExceptionHandlerPathFeature>();
        logger.Log(LogLevel.Information, exception?.Error?.Message);

        context.Response.StatusCode = StatusCodes.Status500InternalServerError;
        await context.Response.WriteAsync(exception?.Error?.Message ?? "");
    });

});

app.MapGet("/checkout", async (ICheckoutService client, HttpContext context, ILogger<Program> logger) =>
{
    var url = await client.GetCheckoutUrl(new CheckoutRequest(1,new List<OrderItem>
    {
        new OrderItem
        {
            Product = new Product
            {
                Name = "Test Product",
                Price = 1499
            },
            Quantity = 1
        }
    }, 1));

    // logger.Log(LogLevel.Information, "logging this");

    throw new ArgumentNullException("test exception - hello world");

    await context.Response.WriteAsync(url);

    
})
.WithName("Checkout");

app.MapEndpoints();

app.MapFallback(async context =>
{

    await context.Response.WriteAsync("Route not found");
});


app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
