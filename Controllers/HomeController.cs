using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;
using urHealthyDiet.Models;

namespace urHealthyDiet.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SignIn()
        {
            ViewBag.Message = "User sign in.";

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SignIn(USER model)
        {
            using (urHealthyDietBaseUser db = new urHealthyDietBaseUser())
            {
                var obj = db.USER.Where(x => x.USER_LOGIN.Equals(model.USER_LOGIN)
                    && x.USER_PASSWORD.Equals(model.USER_PASSWORD)).FirstOrDefault();
                if (obj != null)
                {
                    Session["ID_USER"] = obj.ID_USER.ToString();
                    Session["USER_LOGIN"] = obj.USER_LOGIN.ToString();
                    Session["ROLE"] = obj.ROLE.ToString();

                    return RedirectToAction("Index", "Home", new { role = Session["ROLE"] });
                }
            }
            return View();
        }

        public ActionResult SignUp()
        {
            ViewBag.Message = "User sign up.";

            return View();
        }



        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SignUp(USER model)
        {
            if (ModelState.IsValid)
            {
                urHealthyDietBaseUser entities = new urHealthyDietBaseUser();
                entities.USER.Add(model);
                entities.SaveChanges();

                return RedirectToAction("Index");
            }

            return View();
        }
    }
}