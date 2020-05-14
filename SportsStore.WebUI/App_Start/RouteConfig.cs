using SportsStore.WebUI.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace SportsStore.WebUI
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                constraints: new
                {
                    serverRoute = new ServerRouteConstraint(url =>
                    {
                        return url.PathAndQuery.StartsWith("/Cart",
                            StringComparison.InvariantCultureIgnoreCase);
                    })
                }
            );

            // This is a catch-all for when no other routes match the request; let the Angular 2 router take care of it...
            routes.MapRoute(
                name: "angular",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index" } // The view that bootstraps Angular 2
            );

            //routes.MapRoute(null,
            //    "",
            //    new
            //    {
            //        controller = "Product",
            //        action = "List",
            //        category = (string)null,
            //        page = 1
            //    }
            //    );

            //routes.MapRoute(null,
            //    "Page{page}",
            //    new { controller = "Product", action = "List", category = (string)null },
            //    new { page = @"\d+" }
            //    );

            //routes.MapRoute(null,
            //    "{category}",
            //    new { controller = "Product", action = "List",  page = 1 }
            //    );

            //routes.MapRoute(null,
            //    "{category}/Page{page}",
            //    new { controller = "Product", action = "List" },
            //    new { page = @"\d+" }
            //    );

            //routes.MapRoute(null, "{controller}/{action}");
        }
    }
}
