using SportsStore.Domain.Abstract;
using SportsStore.Domain.Entities;
using SportsStore.WebUI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SportsStore.WebUI.Controllers
{
    public class AdminController : ApiController
    {
        private IProductRepository repository;

        public AdminController(IProductRepository repo)
        {
            repository = repo;
        }

        [HttpGet]
        public IEnumerable<Product> GetAll()
        {
            return repository.Products;
        }

        [HttpPut]
        [HttpPost]
        public IHttpActionResult Save(Product product)
        {
            if (ModelState.IsValid)
            {
                repository.SaveProduct(product);
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete]
        public IHttpActionResult Remove(int id)
        {
            if (id == 0)
                return BadRequest();

            repository.DeleteProduct(id);
            return Ok(id);
        }
    }
}

