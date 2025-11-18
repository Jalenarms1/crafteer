using System;
using HotChocolate.Authorization;
using HotChocolate.Data.Sorting;
using HotChocolate.Resolvers;

namespace Ecomm.Web;

public class AuthorizationHandler : IAuthorizationHandler
{
    public ValueTask<AuthorizeResult> AuthorizeAsync(IMiddlewareContext context, AuthorizeDirective directive, CancellationToken cancellationToken = default)
    {

        var httpContext = context.Service<IHttpContextAccessor>()?.HttpContext;
        if (httpContext is null)
        {
            return new ValueTask<AuthorizeResult>(AuthorizeResult.NotAllowed);
        }

        var cookie = httpContext.Request.Cookies[Constants.COOKIE_KEY];

        if (string.IsNullOrWhiteSpace(cookie)) return new ValueTask<AuthorizeResult>(AuthorizeResult.NotAuthenticated);

        // add cookie validation logic
        return new ValueTask<AuthorizeResult>(AuthorizeResult.Allowed);
    }

    public ValueTask<AuthorizeResult> AuthorizeAsync(AuthorizationContext context, IReadOnlyList<AuthorizeDirective> directives, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}
