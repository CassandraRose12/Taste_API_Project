const recipeIngredients = require('express').Router()
const db = require('../models')
const { Recipe, Ingredient, RecipeIngredient } = db 

// FIND ALL INGREDIENTS
recipeIngredients.get('/', async (req, res) => {
    try{
        const foundRecipeIngredients = await RecipeIngredient.findAll({
            attributes: {
                exclude: [
                    "RecipeRecipeId"
                ]
            },
            include: [
                {
                    model: Recipe,
                    as: "recipe",
                },
                {
                    model: Ingredient,
                    as: "ingredient",
                }
            ]
        })
        res.status(200).json(foundRecipeIngredients)
        console.log("success")
    } catch (error) {
        res.status(500).json(error)
        console.log("broken")
    }
})

//FIND A SPECIFIC INGREDIENT
recipeIngredients.get('/:id', async (req, res) => {
    try {
        const foundRecipeIngredient = await RecipeIngredient.findOne({
            where: { recipe_ingredient_id: req.params.id }
        })
        res.status(200).json(foundRecipeIngredient)
        console.log("Nice Work")
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

// CREATE A NEW INGREDIENT
recipeIngredients.post('/', async (req, res) => {
    try {
        const newRecipeIngredient = await RecipeIngredient.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new recipe ingredient',
            data: newRecipeIngredient
        });
        console.log("GREEEENNNN")
    } catch(err) {
        console.log("broke")
        res.status(500).json(err)
    }
});


// UPDATE AN INGREDIENT
recipeIngredients.put('/:id', async (req, res) => {
    try {
        const updatedRecipeIngredient = await RecipeIngredient.update(req.body, {
            where: {
                recipe_ingredient_id: req.params.id
            }
        });
        res.status(200).json({
            message: `Successfully updated`,
            data: updatedRecipeIngredient
        });
    } catch(err) {
        res.status(500).json(err)
        console.log("broke")
    }
});


// DELETE A RECIPE
recipeIngredients.delete('/:id', async (req, res) => {
    try {
        const deletedRecipeIngredient = await RecipeIngredient.destroy({
            where: {
                recipe_ingredient_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted`,
            data: deletedRecipeIngredient
        })
    } catch(err) {
        res.status(500).json(err)
        console.log("broken")
    }
})

module.exports = recipeIngredients