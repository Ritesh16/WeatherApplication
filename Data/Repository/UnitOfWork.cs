﻿using Data.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext context;

        public ICityRepository CityRepository { get; set; }
        public UnitOfWork(ICityRepository cityRepository, AppDbContext context)
        {
            CityRepository = cityRepository;
            this.context = context;
        }

        public async Task<bool> Save()
        {
            return await context.SaveChangesAsync() > 0;
        }
    }
}