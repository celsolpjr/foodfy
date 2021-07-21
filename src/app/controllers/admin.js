const Admin = require("../models/Admin");

module.exports = {

    index(req, res) {

        Admin.all(function(recipes) {

            return res.render("adm-foodfy/index", { recipes });

        })

    },

    show(req, res) {

        Admin.show(req.params.id, function(recipe) {

            if(!recipe) {
                return res.send("Receita não encontrada")
            }

            return res.render("adm-foodfy/show", { recipe });

        })

    },

    create(req, res) {

        Admin.allChefs(function(chefs) {

            return res.render("adm-foodfy/create", { chefs });

        })

    },

    edit(req, res) {

        Admin.show(req.params.id, function(recipe) {

            if(!recipe) {
                return res.send("Receita não encontrada")
            }

            Admin.allChefs(function(chefs) {

                return res.render("adm-foodfy/edit", { recipe, chefs });

            })

        })

    },

    post(req, res) {

        Admin.create(req.body, function() {

            return res.redirect("/admin/recipes");

        })

    },

    put(req, res) {

        Admin.update(req.body, function() {

            return res.redirect("/admin/recipes");

        })

    },

    delete(req, res) {

        Admin.delete(req.body.id, function() {

            return res.redirect("/admin/recipes");

        })

    }

}