using System;
using Application.Checkout;
using Microsoft.Extensions.DependencyInjection;
namespace Infrastructure.Checkout;

public static class DependencyInjection
{
    public static void AddCheckout(this IServiceCollection services, Action<CheckoutClientOptions> configureOptions)
    {
        services.AddOptions<CheckoutClientOptions>()
                .Configure(configureOptions);

        services.AddScoped<ICheckoutService, CheckoutClient>();

    }
}
