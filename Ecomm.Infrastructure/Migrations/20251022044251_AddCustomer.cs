using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddCustomer : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CustomerId",
                schema: "craft",
                table: "Orders",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Customer",
                schema: "craft",
                columns: table => new
                {
                    CustomerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CustomerEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CustomerPhone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CustomerPassword = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LastSignIn = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer", x => x.CustomerId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Orders_CustomerId",
                schema: "craft",
                table: "Orders",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Customer_CustomerId",
                schema: "craft",
                table: "Orders",
                column: "CustomerId",
                principalSchema: "craft",
                principalTable: "Customer",
                principalColumn: "CustomerId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Customer_CustomerId",
                schema: "craft",
                table: "Orders");

            migrationBuilder.DropTable(
                name: "Customer",
                schema: "craft");

            migrationBuilder.DropIndex(
                name: "IX_Orders_CustomerId",
                schema: "craft",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "CustomerId",
                schema: "craft",
                table: "Orders");
        }
    }
}
