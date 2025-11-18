using System;
using Ecomm.Application.Orders.Dto;

namespace Ecomm.Application.Orders.Interfaces;

public interface IOrderService
{
    Task<ActionResponse<CreateOrderResponse, OrdersError>> CreateOrder(CreateOrderRequest createOrderRequest);
}
