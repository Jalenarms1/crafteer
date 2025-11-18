using System;
using System.Threading.Tasks;
using HotChocolate.Authorization;

namespace Application.Checkout.Mutations;

[MutationType]
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
