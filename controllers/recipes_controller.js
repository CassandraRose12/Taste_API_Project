const recipes = require('express').Router()
const db = require('../models')
const { Recipe, } = db 
const { Op } = require('sequelize')

// // FIND ALL BANDS
// bands.get('/', async (req, res) => {
//     try {
//         const foundBands = await Band.findAll({
//             order: [ [ 'available_start_time', 'ASC' ] ],
//             where: {
//                 name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
//             }
//         })
//         res.status(200).json(foundBands)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// // FIND A SPECIFIC BAND
// bands.get('/:name', async (req, res) => {
//     try {
//         const foundBand = await Band.findOne({
//             where: { name: req.params.name },
//             include: [
//                 { 
//                     model: MeetGreet, 
//                     as: "meet_greets", 
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
        res.status(500).json(err)
    }
})

// UPDATE A RECIPE
recipes.put('/api/recipes/:id', async (req, res) => {
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
        res.status(500).json(err)
    }
})

// DELETE A RECIPE
recipes.delete('/api/recipes/:id', async (req, res) => {
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
        res.status(500).json(err)
    }
})


// Export
module.exports = recipes