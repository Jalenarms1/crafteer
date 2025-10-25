using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Customers.Entities;

public class Customer
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int CustomerId { get; set; }

    public string CustomerName { get; set; } = string.Empty;

    public string CustomerEmail { get; set; } = string.Empty;

    public string CustomerPhone { get; set; } = string.Empty;

    public string CustomerPassword { get; set; } = string.Empty;

    public DateTime CreatedDate { get; set; }

    public DateTime LastSignIn { get; set; }
}
