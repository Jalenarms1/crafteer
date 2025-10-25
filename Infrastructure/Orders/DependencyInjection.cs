using System;
using Domain.Orders.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Orders;

public static class DependencyInjection
{
    public static void AddOrderServices(this IServiceCollection services)
    {
        services.AddScoped<IOrderRepository, OrderService>();

    }
}
