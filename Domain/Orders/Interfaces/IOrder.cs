using System;
using Domain.Customers.Entities;
using Domain.OrderItems;
using Domain.Orders.Entities;

namespace Domain.Orders.Interfaces;

public interface IOrder
{
    int OrderId { get; set; }

    int CustomerId { get; set; }

    long Tax { get; set; }

    long Subtotal {get;set;}

    OrderStatus OrderStatus {get;set;}

    DateTime CreatedAt {get;set;}

    ICollection<OrderItem> OrderItems {get;set;}

    Customer Customer { get; set; }
}
