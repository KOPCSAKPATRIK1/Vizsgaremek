using Microsoft.EntityFrameworkCore;
using Webshop.Desktop.Core.Models.Domain;

namespace Webshop.Repository;
public partial class WebshopContext : DbContext
{
    public WebshopContext()
    {
    }

    public WebshopContext(DbContextOptions<WebshopContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Address> Addresses
    {
        get; set;
    }

    public virtual DbSet<Category> Categories
    {
        get; set;
    }

    public virtual DbSet<Order> Orders
    {
        get; set;
    }

    public virtual DbSet<OrderItem> OrderItems
    {
        get; set;
    }

    public virtual DbSet<PaymentMethod> PaymentMethods
    {
        get; set;
    }

    public virtual DbSet<Product> Products
    {
        get; set;
    }

    public virtual DbSet<Release> Releases
    {
        get; set;
    }

    public virtual DbSet<ShippingMethod> ShippingMethods
    {
        get; set;
    }

    public virtual DbSet<ShoppingCartItem> ShoppingCartItems
    {
        get; set;
    }

    public virtual DbSet<Size> Sizes
    {
        get; set;
    }

    public virtual DbSet<Stock> Stocks
    {
        get; set;
    }

    public virtual DbSet<User> Users
    {
        get; set;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Address>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("address");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.City)
                .HasMaxLength(255)
                .HasColumnName("city");
            entity.Property(e => e.PostalCode)
                .HasColumnType("int(11)")
                .HasColumnName("postalCode");
            entity.Property(e => e.State)
                .HasMaxLength(255)
                .HasColumnName("state");
            entity.Property(e => e.StreetAddress)
                .HasMaxLength(255)
                .HasColumnName("streetAddress");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("category");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Like>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("like");

            entity.HasIndex(e => e.ProductId, "FK_3aeba0763d97c702fff1c66ebb6");

            entity.HasIndex(e => e.UserId, "FK_e8fb739f08d47955a39850fac23");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.ProductId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("productId");
            entity.Property(e => e.UserId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("userId");

            entity.HasOne(d => d.Product).WithMany(p => p.Likes)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK_3aeba0763d97c702fff1c66ebb6");

            entity.HasOne(d => d.User).WithMany(p => p.Likes)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_e8fb739f08d47955a39850fac23");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("order");

            entity.HasIndex(e => e.ShippingMethodId, "FK_4af424d3e7b2c3cb26e075e20fc");

            entity.HasIndex(e => e.AddressId, "FK_73f9a47e41912876446d047d015");

            entity.HasIndex(e => e.PaymentMethodId, "FK_89726ee65618314009b279e66e8");

            entity.HasIndex(e => e.UserId, "FK_caabe91507b3379c7ba73637b84");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.AddressId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("addressId");
            entity.Property(e => e.OrderDate)
                .HasColumnType("datetime")
                .HasColumnName("orderDate");
            entity.Property(e => e.PaymentMethodId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("paymentMethodId");
            entity.Property(e => e.ShippingMethodId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("shippingMethodId");
            entity.Property(e => e.UserId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("userId");

            entity.HasOne(d => d.Address).WithMany(p => p.Orders)
                .HasForeignKey(d => d.AddressId)
                .HasConstraintName("FK_73f9a47e41912876446d047d015");

            entity.HasOne(d => d.PaymentMethod).WithMany(p => p.Orders)
                .HasForeignKey(d => d.PaymentMethodId)
                .HasConstraintName("FK_89726ee65618314009b279e66e8");

            entity.HasOne(d => d.ShippingMethod).WithMany(p => p.Orders)
                .HasForeignKey(d => d.ShippingMethodId)
                .HasConstraintName("FK_4af424d3e7b2c3cb26e075e20fc");

            entity.HasOne(d => d.User).WithMany(p => p.Orders)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_caabe91507b3379c7ba73637b84");
        });

        modelBuilder.Entity<OrderItem>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("order_item");

            entity.HasIndex(e => e.OrderId, "FK_646bf9ece6f45dbe41c203e06e0");

            entity.HasIndex(e => e.ProductId, "FK_904370c093ceea4369659a3c810");

            entity.HasIndex(e => e.SizeId, "FK_b92d3a6017b15d811d4b0c7b789");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.OrderId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("orderId");
            entity.Property(e => e.ProductId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("productId");
            entity.Property(e => e.Quantity)
                .HasColumnType("int(11)")
                .HasColumnName("quantity");
            entity.Property(e => e.SizeId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("sizeId");
           

            entity.HasOne(d => d.Order).WithMany(p => p.OrderItems)
                .HasForeignKey(d => d.OrderId)
                .HasConstraintName("FK_646bf9ece6f45dbe41c203e06e0");                

            entity.HasOne(d => d.Product).WithMany(p => p.OrderItems)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK_904370c093ceea4369659a3c810");

            entity.HasOne(d => d.Size).WithMany(p => p.OrderItems)
                .HasForeignKey(d => d.SizeId)
                .HasConstraintName("FK_b92d3a6017b15d811d4b0c7b789");

            
        });

        modelBuilder.Entity<PaymentMethod>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("payment_method");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("product");

            entity.HasIndex(e => e.CategoryId, "FK_ff0c0301a95e517153df97f6812");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.CategoryId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("categoryId");
            entity.Property(e => e.Desc)
                .HasMaxLength(255)
                .HasColumnName("desc");
            entity.Property(e => e.ImageUrl1)
                .HasMaxLength(255)
                .HasColumnName("imageUrl1");
            entity.Property(e => e.ImageUrl2)
                .HasMaxLength(255)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("imageUrl2");
            entity.Property(e => e.ImageUrl3)
                .HasMaxLength(255)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("imageUrl3");
            entity.Property(e => e.ImageUrl4)
                .HasMaxLength(255)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("imageUrl4");
            entity.Property(e => e.Inactive)
                .HasColumnType("tinyint(4)")
                .HasColumnName("inactive");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.Popular)
                .HasColumnType("tinyint(4)")
                .HasColumnName("popular");
            entity.Property(e => e.Price)
                .HasColumnType("int(11)")
                .HasColumnName("price");

            entity.HasOne(d => d.Category).WithMany(p => p.Products)
                .HasForeignKey(d => d.CategoryId)
                .HasConstraintName("FK_ff0c0301a95e517153df97f6812");

            entity.HasMany(d => d.Sizes).WithMany(p => p.Products)
                .UsingEntity<Dictionary<string, object>>(
                    "ProductSizesSize",
                    r => r.HasOne<Size>().WithMany()
                        .HasForeignKey("SizeId")
                        .HasConstraintName("FK_a7bd6fac9cf96620ec68761ef3b"),
                    l => l.HasOne<Product>().WithMany()
                        .HasForeignKey("ProductId")
                        .HasConstraintName("FK_c363d4050056518c07348e8a27e"),
                    j =>
                    {
                        j.HasKey("ProductId", "SizeId").HasName("PRIMARY");
                        j.ToTable("product_sizes_size");
                        j.HasIndex(new[] { "SizeId" }, "IDX_a7bd6fac9cf96620ec68761ef3");
                        j.HasIndex(new[] { "ProductId" }, "IDX_c363d4050056518c07348e8a27");
                        j.IndexerProperty<int>("ProductId")
                            .HasColumnType("int(11)")
                            .HasColumnName("productId");
                        j.IndexerProperty<int>("SizeId")
                            .HasColumnType("int(11)")
                            .HasColumnName("sizeId");
                    });
        });

        modelBuilder.Entity<Release>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("release");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.Desc)
                .HasMaxLength(255)
                .HasColumnName("desc");
            entity.Property(e => e.ImageUrl1)
                .HasMaxLength(255)
                .HasColumnName("imageUrl1");
            entity.Property(e => e.ImageUrl2)
                .HasMaxLength(255)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("imageUrl2");
            entity.Property(e => e.ImageUrl3)
                .HasMaxLength(255)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("imageUrl3");
            entity.Property(e => e.ImageUrl4)
                .HasMaxLength(255)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("imageUrl4");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.ReleaseDate)
                .HasMaxLength(255)
                .HasColumnName("releaseDate");
        });

        modelBuilder.Entity<ShippingMethod>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("shipping_method");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
        });

        modelBuilder.Entity<ShoppingCartItem>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("shopping_cart_item");

            entity.HasIndex(e => e.ProductId, "FK_54ae5bb4222e2d64ace88dc1416");

            entity.HasIndex(e => e.SizeId, "FK_7ed53be42af947cfdd52153f6f1");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.ProductId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("productId");
            entity.Property(e => e.Quantity)
                .HasColumnType("int(11)")
                .HasColumnName("quantity");
            entity.Property(e => e.SizeId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("sizeId");
            entity.Property(e => e.UserId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("userId");

            entity.HasOne(d => d.Product).WithMany(p => p.ShoppingCartItems)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK_54ae5bb4222e2d64ace88dc1416");

            entity.HasOne(d => d.Size).WithMany(p => p.ShoppingCartItems)
                .HasForeignKey(d => d.SizeId)
                .HasConstraintName("FK_7ed53be42af947cfdd52153f6f1");

            entity.HasOne(d => d.User).WithMany(p => p.ShoppingCartItems)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_8c4ae7c19a3927c2fb1feefda2b");
        });

        modelBuilder.Entity<Size>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("size");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.Size1)
                .HasColumnType("int(11)")
                .HasColumnName("size");
        });

        modelBuilder.Entity<Stock>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("stock");

            entity.HasIndex(e => e.ProductId, "FK_e855a71c31948188c2bf78824a5");

            entity.HasIndex(e => e.SizeId, "FK_ee5aa2560e6e28433d21405a673");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.InStock)
                .HasColumnType("int(11)")
                .HasColumnName("inStock");
            entity.Property(e => e.ProductId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("productId");
            entity.Property(e => e.SizeId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)")
                .HasColumnName("sizeId");

            entity.HasOne(d => d.Product).WithMany(p => p.Stocks)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK_e855a71c31948188c2bf78824a5");

            entity.HasOne(d => d.Size).WithMany(p => p.Stocks)
                .HasForeignKey(d => d.SizeId)
                .HasConstraintName("FK_ee5aa2560e6e28433d21405a673");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("user");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("username");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
