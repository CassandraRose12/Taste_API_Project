const recipes = require('express').Router()
const ingredients = require('express').Router()
const db = require('../models')
const { Recipe, Ingredient, RecipeIngredient } = db 
const { Op } = require('sequelize')

// FIND ALL Recipes
recipes.get('/', async (req, res) => {
    try {
        const foundRecipes = await Recipe.findAll()
        //     order: [ [ 'name', 'ASC' ] ],
        //     where: {
        //         name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
        //     }
        // })
        res.status(200).json(foundRecipes)
        console.log("I'm here")
    } catch (error) {
        console.log("broke")
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC RECIPE
recipes.get('/:id', async (req, res) => {
    try {
        const foundRecipe = await Recipe.findOne({
            where: { recipe_id: req.params.id }
        })
        res.status(200).json(foundRecipe)
        console.log("Nice Work")
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})


// CREATE A NEW RECIPE
recipes.post('/', async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new recipe',
            data: newRecipe
        });
        console.log("GREEEENNNN")
    } catch(err) {
        console.log("broke")
        res.status(500).json(err)
    }
});

// UPDATE A RECIPE
recipes.put('/:id', async (req, res) => {
    try {
        const updatedRecipe = await Recipe.update(req.body, {
            where: {
                recipe_id: req.params.id
            }
        });
        res.status(200).json({
            message: `Successfully updated`,
        });
    } catch(err) {
        res.status(500).json(err)
        console.log("broke")
    }
});

// DELETE A RECIPE
recipes.delete('/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipe.destroy({
            where: {
                recipe_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted`
        })
    } catch(err) {
        res.status(500).json(err)
        console.log("broken")
    }
})


// Export
module.exports = recipes