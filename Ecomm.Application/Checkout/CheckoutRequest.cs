using System;
using Domain.OrderItems;

namespace Ecomm.Application.Checkout;

public sealed record CheckoutRequest
(
    int CustomerId,
    List<OrderItem> OrderItems,
    int OrderId
);
