using DwellDeal.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace DwellDeal.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) 
        {
            
        }

        public DbSet<City> Cities { get; set; }
    }
}
