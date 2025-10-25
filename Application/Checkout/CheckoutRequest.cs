using System;
using Domain.OrderItems;

namespace Application.Checkout;

public sealed record CheckoutRequest
(
    int customerId,
    List<OrderItem> OrderItems,
    int orderId

);
