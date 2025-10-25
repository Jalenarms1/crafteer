using System;
using Domain.OrderItems;
using Domain.Orders.Entities;
using Domain.Orders.Interfaces;
using MediatR;

namespace Application.Orders.Commands;

public sealed record CreateOrderCommand : IRequest<OrderDto>
{
    public int CustomerId { get; set; }
    public List<OrderItem> Items { get; set; } = new();
}
