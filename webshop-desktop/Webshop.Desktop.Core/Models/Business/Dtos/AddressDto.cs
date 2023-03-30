using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Webshop.Desktop.Core.Models.Business.Dtos;
public class AddressDto
{
    public string StreetAddress { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public int PostalCode { get; set; }
}
