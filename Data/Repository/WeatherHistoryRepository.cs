﻿using Data.Dtos;
using Data.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Data.Repository
{
    public class WeatherHistoryRepository : IWeatherHistoryRepository
    {
        private readonly AppDbContext context;

        public WeatherHistoryRepository(AppDbContext context)
        {
            this.context = context;
        }
        public async Task<List<WeatherHistoryDto>> GetWeatherHistory(int cityId, int month, int year)
        {
            var query = (from c in context.Cities
                         join w in context.Weathers on c.Id equals w.CityId
                         join t in context.Temperatures on w.Id equals t.WeatherId
                         join wd in context.WeatherDescriptions on w.Id equals wd.WeatherId
                         where c.Id == cityId
                         select new WeatherHistoryDto
                         {
                             WeatherId = w.Id,
                             Description = wd.Description,
                             Main = wd.Main,
                             Humidity = w.Humidity,
                             Max = t.Max,
                             Min = t.Min,
                             Icon = wd.Icon,
                             Date = w.WeatherDate
                         });


            if(month > 0)
            {
                query = query.Where(x => x.Date.Month == month);
            }

            if (year > 0)
            {
                query = query.Where(x => x.Date.Year == year);
            }

            var data = await query.OrderByDescending(x => x.Date).ToListAsync();
            return data;
        }

        public async Task<RawWeatherDto> GetWeatherHistory(int cityId, DateTime date)
        {
            var rawWeather = await context.RawWeathers.FirstOrDefaultAsync(x => x.CityId == cityId &&
                                            x.DateCreated.Day == date.Day &&
                                            x.DateCreated.Month == date.Month &&
                                            x.DateCreated.Year == date.Year);

            return new RawWeatherDto(rawWeather.DateCreated, rawWeather.WeatherJson);
        }
    }
}
