using System;
using System.Threading.Tasks;
using Ecomm.Application;
using Ecomm.Application.Authentication;
using Microsoft.AspNetCore.Identity;

namespace Ecomm.Infrastructure.Authentication;

public class AuthenticationService(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager) : IAuthenticationService
{
    private readonly UserManager<IdentityUser> _userManager = userManager;
    private readonly SignInManager<IdentityUser> _signInManager = signInManager;
    public async Task<ActionResponse<IdentityUser, AuthenticationError>> LoginUser(AuthDto authDto)
    {
        var user = await _userManager.FindByEmailAsync(authDto.Email);
        if(user is null)
        {
            return ActionResponse<IdentityUser, AuthenticationError>.Failure(AuthenticationError.UserNotFound);
        }


        var result = await _signInManager.PasswordSignInAsync(user, authDto.Password, true, false);
        if (!result.Succeeded)
        {
            return ActionResponse<IdentityUser, AuthenticationError>.Failure(AuthenticationError.InvalidCredentials);
        }

        return ActionResponse<IdentityUser, AuthenticationError>.Success(user);
    }

    public async Task<ActionResponse<bool, AuthenticationError>> LogoutUser(int userId)
    {
        await _signInManager.SignOutAsync();

        return ActionResponse<bool, AuthenticationError>.Success(true);
    }

    
}
