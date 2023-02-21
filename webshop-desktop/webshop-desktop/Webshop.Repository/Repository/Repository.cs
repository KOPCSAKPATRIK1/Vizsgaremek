using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Webshop.Desktop.Core.Interfaces.Repository;
using Webshop.Repository.Context;

namespace Webshop.Repository.Repository;
public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
{
    private readonly WebshopContext _context;
    private readonly DbSet<TEntity> _entities;

    public Repository(WebshopContext context)
    {
        _context = context;
        _entities = context.Set<TEntity>();
    }

    public TEntity Get(int id)
    {
#pragma warning disable CS8603 // Possible null reference return.
        return _entities.Find(id);
#pragma warning restore CS8603 // Possible null reference return.
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
    }

    public void AddRange(IEnumerable<TEntity> entities)
    {
        _entities.AddRange(entities);
    }

    public void Remove(TEntity entity)
    {
        _entities.Remove(entity);
    }
}