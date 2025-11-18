namespace Ecomm.OrderService.Api;

public class Query
{
    public Task<int> GetOrderItem(int orderItemId)
    {
        return Task.FromResult<int>(orderItemId);
    }
}