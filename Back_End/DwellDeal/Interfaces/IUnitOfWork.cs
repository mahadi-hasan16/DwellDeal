﻿namespace DwellDeal.Interfaces
{
    public interface IUnitOfWork
    {
        ICityRepository CityRepository { get; }
        IUserRepository UserRepository { get; }
        IPropertyRepository PropertyRepository { get; }
        IPropertyTypeRepository PropertyTypeRepository { get; }
        IFurnishingTypeRepository FurnishingTypeRepository { get; }
        Task SaveChangesAsync();
    }
}
