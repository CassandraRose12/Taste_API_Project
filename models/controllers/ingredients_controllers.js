const ingredients = require('express').Router()
const db = require('../models')
const { Ingredient } = db 



//Find All Ingredients
ingredients.get('/', async (req, res) => {
    try{
        const foundIngredients = await Ingredient.findAll()
        res.status(200).json(foundIngredients)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Find a specific ingredient
ingredients.get('/:id', async (req, res) => {
    try {
        const foundIngredient = await Ingredient.findOne({
            where: { ingredient_id: req.params.id }
        })
        res.status(200).json(foundIngredients)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Create An Ingredient
ingredients.post('/', async (req, res) => {
    try{
        const newIngredient = await Ingredient.create(req.body)
        res.status(200).json({
            message: `Successfully inserted a new Ingredient!`,
            data: newIngredient
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//Update an Ingredient
ingredients.put('/:id', async (req, res) => {
    try {
        const updatedIngredients = await Ingredient.update(req.body, {
            where: {
                ingredient_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedIngredients} Ingredient(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }

})

// 
ingredients.delete('/:id', async (req, res) => {
    try {
        const deletedIngredients = await Ingredient.destroy({
            where: {
                ingredient_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedIngredients} ingredient(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = ingredients