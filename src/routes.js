const express = require("express");
const foodfy = require("./app/controllers/foodfy");
const adminRecipes = require("./app/controllers/admin");
const adminChefs = require("./app/controllers/chefs");

const routes = express.Router();

/* FOODFY ROUTES */

routes.get("/", foodfy.index)
routes.get("/sobre", foodfy.about)
routes.get("/receitas", foodfy.receipes)
routes.get("/receitas/:index", foodfy.receipeIndex)
routes.get("/chefs", foodfy.chefs);

/* ADMIN RECIPES ROUTES */

routes.get("/admin/recipes", adminRecipes.index);
routes.get("/admin/recipes/create", adminRecipes.create); 
routes.get("/admin/recipes/:id", adminRecipes.show); 
routes.get("/admin/recipes/:id/edit", adminRecipes.edit);

routes.post("/admin/recipes", adminRecipes.post); 
routes.put("/admin/recipes", adminRecipes.put);
routes.delete("/admin/recipes", adminRecipes.delete);

/* ADMIN CHEFS ROUTES */

routes.get("/admin/chefs", adminChefs.index);
routes.get("/admin/chefs/create", adminChefs.create);
routes.get("/admin/chefs/:id", adminChefs.show);
routes.get("/admin/chefs/:id/edit", adminChefs.edit);

routes.post("/admin/chefs", adminChefs.post);
routes.put("/admin/chefs", adminChefs.put);
routes.delete("/admin/chefs", adminChefs.delete);

module.exports = routes;