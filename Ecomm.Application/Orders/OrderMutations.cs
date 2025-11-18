using System;
using System.Threading.Tasks;
using Ecomm.Application.Checkout;
using Ecomm.Application.Orders.Dto;
using Ecomm.Application.Orders.Interfaces;
using HotChocolate.Resolvers;

namespace Ecomm.Application.Orders;

[ExtendObjectType(typeof(Mutation))]
public class OrderMutations(IOrderService orderService, IResolverContext context)
{
    private readonly IOrderService _orderService = orderService;
    private readonly IResolverContext _context = context;
    public async Task<CreateOrderResponse> CreateOrder(CreateOrderRequest createOrderRequest)
    {
        var resp = await _orderService.CreateOrder(createOrderRequest);

        return resp.Data!; 
    }
}
