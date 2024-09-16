namespace DwellDeal.Interfaces
{
    public interface IUnitOfWork
    {
        ICityRepository CityRepository { get; }
        IUserRepository UserRepository { get; }
        Task SaveChangesAsync();
    }
}
