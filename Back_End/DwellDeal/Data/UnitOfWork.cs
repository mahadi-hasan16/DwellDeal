﻿using DwellDeal.Data.Repository;
using DwellDeal.Interfaces;

namespace DwellDeal.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _dbContext;

        public UnitOfWork(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public ICityRepository CityRepository => new CityRepository(_dbContext);

        public async Task SaveChangesAsync()
        {
            await _dbContext.SaveChangesAsync();
            //throw new NotImplementedException();
        }
    }
}