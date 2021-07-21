const Chefs = require("../models/Chefs");

module.exports = {

    index(req, res) {

        Chefs.all(function(chefs) {

            res.render("adm-chefs/index", { chefs });

        })

    },

    create(req, res) {

        res.render("adm-chefs/create");

    },

    show(req, res) {

        Chefs.show(req.params.id, function(chef) {

            if(!chef) {
                return res.send("Chefe não encontrado");
            }

            Chefs.allChefRecipes(req.params.id, function(recipes) {

                res.render("adm-chefs/show", { chef, recipes });

            })

        })

    },

    edit(req, res) {
        
        Chefs.show(req.params.id, function(chef) {

            if(!chef) {
                return res.send("Chefe não encontrado");
            }

            res.render("adm-chefs/edit", { chef });

        })

    },

    post(req, res) {

        Chefs.create(req.body, function() {
            
            res.redirect("/admin/chefs");

        })

    },

    put(req, res) {
        
        Chefs.update(req.body, function() {

            res.redirect(`/admin/chefs/${req.body.id}`);

        })

    },

    delete(req, res) {
        
        Chefs.delete(req.body.id, function() {

            res.redirect("/admin/chefs");

        })

    }

}