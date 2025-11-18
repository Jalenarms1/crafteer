using System;
using Domain.Orders.Entities;

namespace Domain.Orders.Interfaces;

public interface IOrderRepository
{

    Task<Order> CreateNewOrderAsync(Order order);

    Task<List<Order>> GetCustomerOrdersAsync(int customerId);
    Task<Order> GetCustomerOrderAsync(int orderId);
}
