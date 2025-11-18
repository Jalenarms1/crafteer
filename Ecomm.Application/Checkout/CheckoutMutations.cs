using System;
using System.Threading.Tasks;
using Ecomm.Application.Checkout;
using HotChocolate.Authorization;

namespace Ecomm.Application.Checkout.Mutations;

[Authorize]
public class CheckoutMutations(ICheckoutService checkoutService)
{
    private readonly ICheckoutService _checkoutService = checkoutService;

    public async Task<string> CreateCheckoutSession(CheckoutRequest checkoutRequest)
    {
        var url = await _checkoutService.GetCheckoutUrl(checkoutRequest);

        return url;
    }
}
