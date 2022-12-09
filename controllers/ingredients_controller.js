const ingredients = require('express').Router()
const db = require('../models')
const { Recipe, Ingredient, RecipeIngredient } = db 

// FIND ALL INGREDIENTS
ingredients.get('/', async (req, res) => {
    try{
        const foundIngredients = await Ingredient.findAll()
        res.status(200).json(foundIngredients)
        console.log("success")
    } catch (error) {
        res.status(500).json(error)
        console.log("broken")
    }
})

//FIND A SPECIFIC INGREDIENT
ingredients.get('/:id', async (req, res) => {
    try {
        const foundIngredient = await Ingredient.findOne({
            where: { ingredient_id: req.params.id }
        })
        res.status(200).json(foundIngredient)
        console.log("Nice Work")
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

// CREATE A NEW INGREDIENT
ingredients.post('/', async (req, res) => {
    try {
        const newIngredient = await Ingredient.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new ingredient',
            data: newIngredient
        });
        console.log("GREEEENNNN")
    } catch(err) {
        console.log("broke")
        res.status(500).json(err)
    }
});


// UPDATE AN INGRIDIENT
ingredients.put('/:id', async (req, res) => {
    try {
        const updatedIngredient = await Ingredient.update(req.body, {
            where: {
                ingredient_id: req.params.id
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
ingredients.delete('/:id', async (req, res) => {
    try {
        const deletedIngredient = await Ingredient.destroy({
            where: {
                ingredient_id: req.params.id
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

module.exports = ingredients