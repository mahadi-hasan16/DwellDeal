namespace DwellDeal.Interfaces
{
    public interface IUnitOfWork
    {
        ICityRepository CityRepository { get; }
        Task SaveChangesAsync();
    }
}
