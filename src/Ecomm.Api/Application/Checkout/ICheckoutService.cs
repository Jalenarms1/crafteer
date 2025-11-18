using System;

namespace Application.Checkout;

public interface ICheckoutService
{
    Task<string> GetCheckoutUrl(CheckoutRequest checkoutRequest);

}
