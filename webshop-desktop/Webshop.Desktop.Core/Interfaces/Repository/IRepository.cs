using System.Linq.Expressions;

namespace Webshop.Desktop.Core.Interfaces.Repository;
public interface IRepository<TEntity> where TEntity : class
{
    TEntity Get(int id);
    IQueryable<TEntity> GetAll();
    IQueryable<TEntity> Find(Expression<Func<TEntity, bool>> predicate);
    void Add(TEntity entity);
    void AddRange(IEnumerable<TEntity> entities);
    void Remove(TEntity entity);
}