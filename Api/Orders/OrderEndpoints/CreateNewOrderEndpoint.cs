using System;
using Application.Checkout;
using Application.Checkout.Commands;
using Application.Orders.Commands;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using  MinimalApi.Endpoint;

namespace Api.Orders.OrderEndpoints;

public class CreateNewOrderEndpoint(ICheckoutService checkoutService,  IMediator mediator) : IEndpoint<IResult, CheckoutRequest, CancellationToken>
{

    // public CreateNewOrderEndpoint { }
    public void AddRoute(IEndpointRouteBuilder app)
    {
        app.MapPost("/api/v1/orders/create", async ([FromBody] CheckoutRequest req, CancellationToken token) =>
        {
            return HandleAsync(req, token);
        });
    }

    public async Task<IResult> HandleAsync(CheckoutRequest request, CancellationToken cancellationToken)
    {
        var checkoutUrl = await mediator.Send(new GetCheckoutUrlCommand { checkoutRequest = request });
        
        var order = await mediator.Send(new CreateOrderCommand { CustomerId = request.customerId, Items = request.OrderItems }, cancellationToken);
        
        return Results.Redirect(checkoutUrl);
    }
}
