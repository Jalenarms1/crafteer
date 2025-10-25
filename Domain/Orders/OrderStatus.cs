using System;

namespace Domain.Orders;

public enum OrderStatus
{
    Checkout,
    Placed,
    Confirmed,
    Shipped
}
