using System;
using MediatR;

namespace Application.Checkout.Commands;

public sealed record GetCheckoutUrlCommand : IRequest<string>
{
    public CheckoutRequest checkoutRequest { get; set; }

}
