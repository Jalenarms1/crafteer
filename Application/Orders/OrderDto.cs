using System;
using System.Collections.ObjectModel;
using Domain.Customers.Entities;
using Domain.OrderItems;
using Domain.Orders;
using Domain.Orders.Entities;
using Domain.Orders.Interfaces;
using Microsoft.VisualBasic;

namespace Application.Orders;

public class OrderDto : IOrder
{
    public int OrderId { get; set; }

    public int CustomerId { get; set; }

    public Customer Customer { get; set; }

    public OrderStatus OrderStatus { get; set; } = OrderStatus.Placed;

    public ICollection<OrderItem> OrderItems { get; set; } = new Collection<OrderItem>();

    public long Tax { get; set; }
    public long Subtotal { get; set; }
    public DateTime CreatedAt { get; set; }

}
