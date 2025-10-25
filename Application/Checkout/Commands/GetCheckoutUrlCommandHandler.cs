using System;
using MediatR;

namespace Application.Checkout.Commands;

public class GetCheckoutUrlCommandHandler(ICheckoutService checkoutService) : IRequestHandler<GetCheckoutUrlCommand, string>
{
    public async Task<string> Handle(GetCheckoutUrlCommand command, CancellationToken cancellationToken)
    {
        var url = await checkoutService.GetCheckoutUrl(command.checkoutRequest);

        return url;
    }
}
