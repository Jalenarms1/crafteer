using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Products.Entities;

public class Product
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int ProductId { get; set; }

    public string Name { get; set; } = string.Empty;

    public long Price { get; set; }

    public bool InStock { get; set; }
}
