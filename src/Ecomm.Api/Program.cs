using System.Reflection;
using Application;
using Application.Checkout.Mutations;
using Ecomm.Web;
using HotChocolate.AspNetCore;
using MassTransit;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddHttpClient();

builder.Services
    .AddFusionGatewayServer()
    .ConfigureFromFile("gateway.fgp")
    .ModifyFusionOptions(x => x.AllowQueryPlan = true);


builder.Services.AddMassTransit(busConfig =>
{
    busConfig.SetKebabCaseEndpointNameFormatter();
    busConfig.UsingRabbitMq((busConfig, ctx) =>
    {
        ctx.Host("ecomm-bus", "/", h =>
        {
           h.Username(Environment.GetEnvironmentVariable("RABBITMQ_USER")); 
           h.Password(Environment.GetEnvironmentVariable("RABBITMQ_PASS")); 
        });
    });
});

// builder.Services.AddIdentityDb();

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

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast");

app.MapGraphQL();

app.RunWithGraphQLCommands(args);
record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
