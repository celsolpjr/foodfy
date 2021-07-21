const db = require("../../config/db");

module.exports = {

    all(callback) {

        db.query(`SELECT recipes.*, chefs.name AS author
                 FROM recipes
                 LEFT JOIN chefs ON (chefs.id = recipes.chef_id)`, function(err, results) {

            if(err) throw `Database error ${err}`

            callback(results.rows);

        })

    },

    allChefs(callback) {
        db.query(`SELECT chefs.*, COUNT(recipes) AS total_recipes
        FROM chefs
        LEFT JOIN recipes ON (chefs.id = recipes.chef_id)
        GROUP BY chefs.id, chefs.name, chefs.avatar_url, chefs.created_at`, function(err, results) {
            if(err) throw `Database error ${err}`

            callback(results.rows);
        })
    },

    show(id, callback) {

        db.query(`SELECT * FROM recipes WHERE id = $1`, [id], function(err, results) {

            if(err) throw `Database error ${err}`

            callback(results.rows[0]);

        })

    }

}