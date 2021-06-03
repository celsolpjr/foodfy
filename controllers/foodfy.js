const receipes = require("../data");

exports.index = function(req, res) {
    return res.render("foodfy/home", { receipes });
}

exports.about = function(req, res) {
    return res.render("foodfy/sobre");
}

exports.receipes = function(req, res) {
    return res.render("foodfy/receitas", { receipes });
}

exports.receipeIndex = function(req, res) {

    const receipeIndex = req.params.index;
    const receipe = receipes[receipeIndex];

    return res.render("foodfy/detalhes", { receipe });

}