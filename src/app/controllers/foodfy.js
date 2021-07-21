const Foodfy = require("../models/Foodfy");

module.exports = {

    index(req, res) {

        Foodfy.all(function(receipes) {

            return res.render("foodfy/home", { receipes });

        })

    },

    about(req, res) {

        return res.render("foodfy/sobre");

    },

    receipes(req, res) {

        Foodfy.all(function(receipes) {

            return res.render("foodfy/receitas", { receipes });

        })

    },

    receipeIndex(req, res) {

        Foodfy.show(req.params.index, function(receipe) {

            return res.render("foodfy/detalhes", { receipe });

        })

    },

    chefs(req, res) {

        Foodfy.allChefs(function(chefs) {

            return res.render("foodfy/chefs", { chefs });

        })

    }

}