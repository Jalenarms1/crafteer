using System;
using Ecomm.Contracts.Orders.Dtos;

namespace Application.Checkout;

public sealed record CheckoutRequest
(
    int CustomerId,
    List<OrderItemDto> OrderItems,
    int OrderId
);
