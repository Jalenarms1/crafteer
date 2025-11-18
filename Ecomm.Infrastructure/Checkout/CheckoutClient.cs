using System;
using Ecomm.Application.Checkout;
using Domain.OrderItems;
using Domain.Orders.Entities;
using Microsoft.Extensions.Options;
using Stripe;

namespace Ecomm.Infrastructure.Checkout;

public class CheckoutClient : ICheckoutService
{
    private readonly StripeClient _stripeClient;

    private CheckoutClientOptions _options;

    public CheckoutClient(IOptions<CheckoutClientOptions> optionsAccessor)
    {
        var options = optionsAccessor.Value;

        if (options is null) throw new ArgumentNullException("please configure the checkout client options");

        if (string.IsNullOrEmpty(options.ApiKey)) throw new ArgumentNullException("please provide your gateway key");

        if (string.IsNullOrEmpty(options.CallbackUrl)) throw new ArgumentNullException("please provide your session callback url");

        if (string.IsNullOrEmpty(options.DisplayName)) throw new ArgumentNullException("provide a display name for your checkout session");


        _options = options;
        _stripeClient = new StripeClient(_options.ApiKey);
    }
    
    public async Task<string> GetCheckoutUrl(CheckoutRequest checkoutRequest)
    {
        IEnumerable<Stripe.Checkout.SessionLineItemOptions> lineItems = checkoutRequest.OrderItems.Select(oi =>
        {
            return new Stripe.Checkout.SessionLineItemOptions
            {
                Quantity = oi.Quantity,
                PriceData = new Stripe.Checkout.SessionLineItemPriceDataOptions
                {
                    UnitAmount = oi.Product.Price,
                    Currency = "USD",
                    TaxBehavior = "inclusive",
                    ProductData = new Stripe.Checkout.SessionLineItemPriceDataProductDataOptions
                    {
                        Name = oi.Product.Name,
                    }
                }
            };

        });

        var resp = await NewCheckout(lineItems, new Dictionary<string, string> { ["OrderId"] = checkoutRequest.OrderId.ToString() });

        return resp.CheckoutUrl;
    }

    private async Task<CheckoutResponse> NewCheckout(IEnumerable<Stripe.Checkout.SessionLineItemOptions> lineItems, Dictionary<string, string> metadata)
    {
        var checkout = await _stripeClient.V1.Checkout.Sessions.CreateAsync(
            new Stripe.Checkout.SessionCreateOptions
            {
                BrandingSettings = new Stripe.Checkout.SessionBrandingSettingsOptions
                {
                    DisplayName = _options.DisplayName
                },
                SuccessUrl = _options.CallbackUrl,
                Mode = "payment",
                PaymentMethodTypes = new List<string> { "card" },
                LineItems = lineItems.ToList(),
                Metadata = metadata
            }
        );

        var url = checkout;

        return new CheckoutResponse(url.Url);
    }
}
