using System;
using Domain.OrderItems;
using Domain.Orders.Entities;

namespace Ecomm.Application.Checkout;

public interface ICheckoutService
{
    Task<string> GetCheckoutUrl(CheckoutRequest checkoutRequest);

}
