using System;
using Domain.Orders.Entities;

namespace Ecomm.Application;

public class Mutation
{
    public string SayHello(Order order) => $"Hello, {order.Customer?.CustomerName}";
}
