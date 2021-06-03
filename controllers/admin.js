const fs = require("fs");
const data = require("../data.json");

exports.index = function(req, res) {

    return res.render("admin/index", { recipes: data.recipes } );
}

exports.show = function(req, res) {
    const id = req.params.id;

    const foundRecipe = data.recipes[id];

    const recipe = {
        ...foundRecipe,
        id: id
    }

    if (!recipe) {
        return res.send("Receita não encontrada!");
    }

    return res.render("admin/show", { recipe });
}

exports.create = function(req, res) {

    return res.render("admin/create");
}

exports.edit = function(req, res) {
    const id = req.params.id;

    const foundRecipe = data.recipes[id];

    const recipe = {
        ...foundRecipe,
        id: id
    }

    if (!recipe) {
        return res.send("Receita não encontrada!");
    }

    return res.render("admin/edit", { recipe });
}

exports.post = function(req, res) {
    
    const keys = Object.keys(req.body);

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Preencha todos os campos!");
        }
    }
    
    data.recipes.push(req.body);

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send("write file error!");
        }

        return res.redirect("/admin/recipes");

    })
    
}