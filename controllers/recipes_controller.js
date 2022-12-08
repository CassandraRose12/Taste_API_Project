const recipes = require('express').Router()
const db = require('../models')
const { Recipe, } = db 
const { Op } = require('sequelize')

// FIND ALL Recipes
recipes.get('/', async (req, res) => {
    try {
        console.log("I'm here")
        const foundRecipes = await Recipe.findAll({
            order: [ [ 'name', 'country' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundRecipes)
    } catch (error) {
        res.status(500).json(error)
    }
})

// // FIND A SPECIFIC BAND
// recipes.get('/api/recipes/:id', async (req, res) => {
//     try {
//         const foundBand = await Recipe.findOne({
//             where: { name: req.params.name },
//             include: [
//                 { 
//                     model: recipe, 
//                     as: "recipe", 
//                     attributes: { exclude: ["band_id", "event_id"] },
//                     include: { 
//                         model: Event, 
//                         as: "event", 
//                         where: { name: { [Op.like]: `%${req.query.event ? req.query.event : ''}%` } } 
//                     }
//                 },
//                 { 
//                     model: SetTime, 
//                     as: "set_times",
//                     attributes: { exclude: ["band_id", "event_id"] },
//                     include: { 
//                         model: Event, 
//                         as: "event", 
//                         where: { name: { [Op.like]: `%${req.query.event ? req.query.event : ''}%` } } 
//                     }
//                 }
//             ],
//             order: [
//                 [{ model: MeetGreet, as: "meet_greets" }, { model: Event, as: "event" }, 'date', 'DESC'],
//                 [{ model: SetTime, as: "set_times" }, { model: Event, as: "event" }, 'date', 'DESC']
//             ]
//         })
//         res.status(200).json(foundBand)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// CREATE A NEW RECIPE
recipes.post('/', async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new recipe',
            data: newRecipe
        })
    } catch(err) {
        console.log("broke")
        res.status(500).json(err)
    }
})

// UPDATE A RECIPE
recipes.put('/:id', async (req, res) => {
    try {
        const updatedRecipe = await Recipe.update(req.body, {
            where: {
                recipe_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedRecipes} recipe(s)`
        })
    } catch(err) {
        console.log("broke")
        res.status(500).json(err)
    }
})

// DELETE A RECIPE
recipes.delete('/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipe.destroy({
            where: {
                recipe_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedRecipes} recipe(s)`
        })
    } catch(err) {
        console.log("broken")
        res.status(500).json(err)
    }
})


// Export
module.exports = recipes