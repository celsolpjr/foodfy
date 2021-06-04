const data = require("../data.json");

exports.index = function(req, res) {

    const recipes = data.recipes.filter(function(recipe, recipeIndex) {
        if (recipeIndex < 6) {
            return recipe;
        }
    })

    return res.render("foodfy/home", { receipes: recipes });
}

exports.about = function(req, res) {
    return res.render("foodfy/sobre");
}

exports.receipes = function(req, res) {
    return res.render("foodfy/receitas", { receipes: data.recipes });
}

exports.receipeIndex = function(req, res) {

    const receipeIndex = req.params.index;
    const receipe = data.recipes[receipeIndex];

    return res.render("foodfy/detalhes", { receipe });

}