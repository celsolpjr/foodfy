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

    if (!foundRecipe) {
        return res.send("Receita não encontrada!");
    }

    const recipe = {
        ...foundRecipe,
        id: id
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

exports.put = function(req, res) {

    const { id, preparation, information, ingredients, author, title, image } = req.body;

    data.recipes[id] = {
        image: image,
        title: title,
        author: author,
        ingredients: ingredients,
        preparation: preparation,
        information: information
    }

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("write file error!");

        return res.redirect(`/admin/recipes/${id}`);
    })

}

exports.delete = function(req, res) {
    const { id } = req.body;

    const recipes = data.recipes.filter(function(recipe) {
        return(recipe != data.recipes[id]);
    })

    data.recipes = recipes;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("write file error!");

        return res.redirect(`/admin/recipes/`);
    })
}