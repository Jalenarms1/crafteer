using System;
using Application.Checkout;
using Domain.Orders.Entities;
using Domain.Orders.Interfaces;
using MediatR;

namespace Application.Orders.Commands;

public class CreateOrderCommandHandler(IOrderRepository orderRepository) : IRequestHandler<CreateOrderCommand, IOrder>
{

    public async Task<IOrder> Handle(CreateOrderCommand request, CancellationToken cancellationToken)
    {
        var order = await orderRepository.CreateNewOrderAsync(Order.NewOrder(request.CustomerId, request.Items));

        return order;

    }
}
