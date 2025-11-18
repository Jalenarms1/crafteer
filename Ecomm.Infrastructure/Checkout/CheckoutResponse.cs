using System;

namespace Ecomm.Infrastructure.Checkout;

public sealed record CheckoutResponse
(
    string CheckoutUrl
);
