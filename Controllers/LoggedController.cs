using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using urHealthyDiet.Models;

namespace urHealthyDiet.Controllers
{
    public class LoggedController : Controller
    {
        // GET: Logged
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult OrderNewDiet()
        {
            ViewBag.Message = "User sign up.";

            return View();
        }



        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult OrderNewDiet(ORDER order)
        {
            if (ModelState.IsValid)
            {
                urHealthyDietBaseEntitiesOrderModel entities = new urHealthyDietBaseEntitiesOrderModel();
                entities.ORDER.Add(order);
                entities.SaveChanges();          
            }
            return RedirectToAction("Index", "Home");
        }
    }
}