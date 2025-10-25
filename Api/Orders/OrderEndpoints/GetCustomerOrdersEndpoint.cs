using System;
using Domain.Orders.Interfaces;
using Microsoft.AspNetCore.Mvc;
using MinimalApi.Endpoint;

namespace Api.Orders.OrderEndpoints;

public class GetCustomerOrdersEndpoint(IOrderRepository orderRepository) : IEndpoint
{

    public void AddRoute(IEndpointRouteBuilder app)
    {
        app.MapGet("/api/v1/orders/{customerId}", async ([FromRoute] int customerId) =>
        {
            await HandleAsync(customerId);
        });
    }
    
    public async Task<IResult> HandleAsync(int customerId)
    {
        var customerOrders = await orderRepository.GetCustomerOrdersAsync(customerId);


        return Results.Ok(customerOrders);
    }
}
