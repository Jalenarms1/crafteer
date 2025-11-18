using System;
using Microsoft.AspNetCore.Identity;

namespace Ecomm.Application.Authentication;


[ExtendObjectType(typeof(Mutation))]
public class AuthenticationMutations(IAuthenticationService authenticationService)
{
    public async Task<ActionResponse<IdentityUser, AuthenticationError>> LoginUser(AuthDto authDto)
    {
        return await authenticationService.LoginUser(authDto);
    }
}
