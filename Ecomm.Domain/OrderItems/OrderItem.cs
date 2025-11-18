using System;
using System.ComponentModel.DataAnnotations.Schema;
using Domain.Products.Entities;
namespace Domain.OrderItems;

public class OrderItem
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int OrderItemId { get; set; }

    public int Quantity { get; set; }

    public Product Product { get; set; }

    public long GetTax()
    {
        double tax = (this.Quantity * this.Product.Price * 1.08) - this.Quantity * this.Product.Price;
        return (long)tax;
    }

    public long GetSubTotal()
    {
        double tax = this.Quantity * this.Product.Price;
        return (long)tax;
    }
    
}
