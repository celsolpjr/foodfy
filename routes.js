const express = require("express");
const foodfy = require("./controllers/foodfy");
const admin = require("./controllers/admin");

const routes = express.Router();

/* FOODFY ROUTES */

routes.get("/", foodfy.index)
routes.get("/sobre", foodfy.about)
routes.get("/receitas", foodfy.receipes)
routes.get("/receitas/:index", foodfy.receipeIndex)

/* ADMIN ROUTES */

routes.get("/admin/recipes", admin.index);
routes.get("/admin/recipes/create", admin.create); 
routes.get("/admin/recipes/:id", admin.show); 
routes.get("/admin/recipes/:id/edit", admin.edit);

routes.post("/admin/recipes", admin.post); 
//routes.put("/admin/recipes", admin.put);
//routes.delete("/admin/recipes", admin.delete);


module.exports = routes;