using System;

namespace Ecomm.OrderService.Api.Orders;

[ExtendObjectType<Mutation>]
public class OrdersMutations
{
    public async Task<int> NewOrder(int orderId)
    {
        return orderId;
    }
}
