using System.Collections.Generic;
using System.Linq;
using SportsStore.Domain.Abstract;
using SportsStore.Domain.Entities;
using SportsStore.WebUI.Models;
using System.Net;
using System.Web.Mvc;

namespace SportsStore.WebUI.Controllers
{
    public class CartController : Controller
    {
        private IProductRepository repository;
        private IOrderProcessor orderProcessor;
        public int PageSize = 4;
        public CartController(IProductRepository repo, IOrderProcessor proc)
        {
            repository = repo;
            orderProcessor = proc;
        }

        public JsonResult GetList(string category, int page = 1)
        {
            ProductsListViewModel model = new ProductsListViewModel
            {
                Products = repository.Products
                .Where(p => category == "all" || p.Category == category)
                .OrderBy(p => p.Id)
                .Skip((page - 1) * PageSize)
                .Take(PageSize),
                PagingInfo = new PagingInfo
                {
                    CurrentPage = page,
                    ItemsPerPage = PageSize,
                    TotalItems = category == "all" ?
                        repository.Products.Count() :
                        repository.Products.Where(e => e.Category == category).Count()
                },
                CurrentCategory = category
            };
            return Json(model, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetCategories()
        {
            return Json(repository.Products.Select(s => s.Category).Distinct().OrderBy(o => o), JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetCart(Cart cart)
        {
            return Json(cart.Lines, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AddToCart(Cart cart, int Id)
        {
            Product product = repository.Products
            .FirstOrDefault(p => p.Id == Id);
            if (product != null)
            {
                cart.AddItem(product, 1);
            }

            CartLine line = cart.Lines.FirstOrDefault(f => f.Product.Id == Id);

            return Json(line);
        }


        public JsonResult RemoveFromCart(Cart cart, int Id)
        {
            Product product = repository.Products
            .FirstOrDefault(p => p.Id == Id);
            if (product != null)
            {
                cart.RemoveLine(product);
            }
            return Json(Id);
        }


        public JsonResult Checkout(Cart cart, ShippingDetails shippingDetails)
        {
            orderProcessor.ProcessOrder(cart, shippingDetails);
            cart.Clear();
            return Json("Success");
        }
    }
}