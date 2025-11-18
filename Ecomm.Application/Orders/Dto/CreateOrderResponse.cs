using System;
using System.Collections.ObjectModel;
using Domain.Customers.Entities;
using Domain.OrderItems;
using Domain.Orders;

namespace Ecomm.Application.Orders.Dto;

public class CreateOrderResponse
{
    public int OrderId { get; set; }

    public Uri CheckoutUrl { get; set; }
}
