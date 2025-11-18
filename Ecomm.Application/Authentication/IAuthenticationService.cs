using System;
using Microsoft.AspNetCore.Identity;

namespace Ecomm.Application.Authentication;

public interface IAuthenticationService
{
    Task<ActionResponse<IdentityUser, AuthenticationError>> LoginUser(AuthDto authDto);
    Task<ActionResponse<bool, AuthenticationError>> LogoutUser(int userId);
}
