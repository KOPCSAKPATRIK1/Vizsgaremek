using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Webshop.Desktop.Core.Interfaces.Repository;
using Webshop.Repository;

namespace Webshop.Repositrory.Repository;

public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
{
    private readonly WebshopContext _context;
    private readonly DbSet<TEntity> _entities;

    public Repository(WebshopContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
        _entities = context.Set<TEntity>();
    }

    public TEntity Get(int id) =>
#pragma warning disable CS8603 // Possible null reference return.
        _entities.Find(id);
#pragma warning restore CS8603 // Possible null reference return.

    public IQueryable<TEntity> GetAllIncluding(params Expression<Func<TEntity, object>>[] includeProperties)
    {
        IQueryable<TEntity> query = _entities;
        foreach (var includeProperty in includeProperties)
        {
            query = query.Include(includeProperty);
        }
        return query;
    }

    public IQueryable<TEntity> GetAll()
    {
        return _entities.AsQueryable();
    }

    public IQueryable<TEntity> Find(Expression<Func<TEntity, bool>> predicate)
    {
        return _entities.Where(predicate);
    }

    public void Add(TEntity entity)
    {
        _entities.Add(entity);
        _context.SaveChanges();
    }

    public void AddRange(IEnumerable<TEntity> entities) => _entities.AddRange(entities);

    public void Remove(TEntity entity)
    {
        _entities.Remove(entity);
        _context.SaveChanges();
    }

    public void Update(TEntity entity)
    {
        _context.Entry(entity).State = EntityState.Modified;
        _context.SaveChanges();
    }
}
