using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Webshop.Desktop.Core.Models.Domain;
public partial class Like
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? ProductId { get; set; }

    public virtual Product Product { get; set; }

    public virtual User User { get; set; }
}
