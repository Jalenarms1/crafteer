using System;

namespace Infrastructure.Checkout;

public sealed record CheckoutResponse
(
    string CheckoutUrl
);
