using System;
using Ecomm.Application.Checkout;
using Domain.Orders.Interfaces;
using Ecomm.Infrastructure;
using Ecomm.Infrastructure.Checkout;
using Ecomm.Infrastructure.Orders;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Ecomm.InfrastructureInfrastructure;

public static  class DependencyInjection
{
    public static IServiceCollection AddIdentityDb(this IServiceCollection services)
    {
        services.AddDbContext<AppDbContext>(options =>
        {
            Console.WriteLine(Environment.GetEnvironmentVariable("DB_CONN"));
            options.UseSqlServer(Environment.GetEnvironmentVariable("DB_CONN"), opt => opt.EnableRetryOnFailure());
        });

        services.AddDefaultIdentity<IdentityUser>(options =>
        {

            options.SignIn.RequireConfirmedAccount = true;
        })
        .AddEntityFrameworkStores<AppDbContext>()
        .AddSignInManager();

        return services;
    }

    public static void AddCheckout(this IServiceCollection services, Action<CheckoutClientOptions> configureOptions)
    {
        services.AddOptions<CheckoutClientOptions>()
                .Configure(configureOptions);

        services.AddScoped<ICheckoutService, CheckoutClient>();

    }

    public static void AddOrderServices(this IServiceCollection services)
    {
        services.AddScoped<IOrderRepository, OrderService>();

    }

}
