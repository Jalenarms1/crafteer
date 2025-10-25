using System;
using System.Collections.ObjectModel;
using Domain.Customers.Entities;
using Domain.OrderItems;
using Domain.Orders.Interfaces;
namespace Domain.Orders.Entities;

public class Order : IOrder
{
    public int OrderId { get; set; }

    public int CustomerId { get; set; }

    public long Tax { get; set; }

    public long Subtotal { get; set; }

    public OrderStatus OrderStatus { get; set; } = OrderStatus.Placed;

    public DateTime CreatedAt { get; set; }

    public ICollection<OrderItem> OrderItems { get; set; } = new Collection<OrderItem>();

    public Customer Customer { get; set; }

    public static Order NewOrder(
        int customerId,
        List<OrderItem> orderItems

    )
    {
        return new Order
        {
            CustomerId = customerId,
            OrderItems = orderItems,
            CreatedAt = DateTime.UtcNow,
            OrderStatus = OrderStatus.Checkout,
            Tax = orderItems.Sum(oi => oi.GetTax()),
            Subtotal = orderItems.Sum(oi => oi.GetSubTotal()),
        };
    }
}
