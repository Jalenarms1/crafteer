using System;

namespace Ecomm.Infrastructure.Checkout;

public class CheckoutClientOptions
{
    public string ApiKey { get; set; } = string.Empty;
    public string CallbackUrl { get; set; } = string.Empty;
    public string CancelUrl { get; set; } = string.Empty;
    public string DisplayName { get; set; } = string.Empty;
}
