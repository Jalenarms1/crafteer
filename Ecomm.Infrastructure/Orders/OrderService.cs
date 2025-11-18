using System;
using Domain.Orders.Entities;
using Domain.Orders.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Ecomm.Infrastructure.Orders;

public class OrderService(AppDbContext context) : IOrderRepository
{
    public async Task<Order> CreateNewOrderAsync(Order order)
    {
        context.Orders.Add(order);

        await context.SaveChangesAsync();

        return order;
    }
    
    public async Task<List<Order>> GetCustomerOrdersAsync(int customerId)
    {
        return await context.Orders.ToListAsync();
    }
    public async Task<Order?> GetCustomerOrderAsync(int orderId)
    {

        return await context.Orders.Where(o => o.OrderId == orderId).FirstOrDefaultAsync();
    }
}
