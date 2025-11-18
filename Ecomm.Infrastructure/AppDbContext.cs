using System;
using Domain.OrderItems;
using Domain.Orders.Entities;
using Domain.Products.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Ecomm.Infrastructure;

public class AppDbContext : IdentityDbContext
{
    public DbSet<Product> Products { get; set; }

    public DbSet<Order> Orders { get; set; }

    public DbSet<OrderItem> OrderItems { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }



    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasDefaultSchema("craft");

        base.OnModelCreating(modelBuilder);
    }
}
