const db = require("../../config/db");
const { show } = require("../controllers/chefs");

module.exports = {

    all(callback) {

        db.query(`SELECT * FROM chefs ORDER BY name ASC`, function(err, results) {

            if(err) throw `Database error ${err}`

            callback(results.rows);

        })

    },

    allChefRecipes(id, callback) {

        db.query(`SELECT * FROM recipes WHERE chef_id = $1`, [id], function(err, results) {

            if(err) throw `Database error ${err}`;

            callback(results.rows);

        })

    },

    create(data, callback) {

        const query = `
            INSERT INTO chefs (
                name,
                avatar_url
            ) VALUES ($1, $2) RETURNING id
        `

        const values = [
            data.name,
            data.avatar_url
        ]

        db.query(query, values, function(err, results) {

            if(err) throw `Database error ${err}`

            callback(results.rows[0].id);

        })

    },

    show(id, callback) {

        db.query(`SELECT chefs.*, COUNT(recipes) AS total_recipes 
            FROM chefs
            LEFT JOIN recipes ON (recipes.chef_id = chefs.id)
            WHERE chefs.id = $1
            GROUP BY chefs.id, chefs.name, chefs.avatar_url, chefs.created_at 
            `, [id], function(err, results) {

            if(err) throw `Database error ${err}`

            callback(results.rows[0]);

        })

    },

    update(data, callback) {

        const query = `
            UPDATE chefs SET 
                name=($1),
                avatar_url=($2)
            WHERE id = $3
        `

        const values = [
            data.name,
            data.avatar_url,
            data.id
        ]

        db.query(query, values, function(err, results) {

            if(err) throw `Database error ${err}`

            callback();

        })

    },

    delete(id, callback) {

        db.query(`DELETE FROM chefs WHERE id = $1`, [id], function(err, results) {

            if(err) throw `Database error ${err}`

            callback();

        })

    }
}