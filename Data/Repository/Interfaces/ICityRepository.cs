using Data.Entities;

namespace Data.Repository.Interfaces
{
    public interface ICityRepository
    {
        Task<IEnumerable<City>> GetCities();
        Task<bool> CityExists(City city);
        void AddCity(City city);
        void RemoveCity(int cityId);
        Task<int> GetTotalCities();
        bool Save();
    }
}