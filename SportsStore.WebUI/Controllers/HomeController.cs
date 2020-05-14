using SportsStore.Domain.Abstract;
using SportsStore.WebUI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SportsStore.WebUI.Controllers
{
    public class HomeController : Controller
    {      
        //private IProductRepository repository;

        //public int PageSize = 4;

        //public HomeController(IProductRepository productRepository)
        //{
        //    repository = productRepository;
        //}

        public ActionResult Index()
        {
            return View();
        }

        
    }
}