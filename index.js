require("dotenv").config();
const PORT = process.env.PORT || 3010;
const express = require("express");
const app = express();
const { Sequelize } = require('sequelize')

// CONFIGURATION / MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => { 
    console.log(req)
    console.log("this is our middleware");
    next();
});

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome ...'
    })
})


// CONTROLLERS  
const recipesController = require('./controllers/recipes_controller')
app.use('/api/recipes', recipesController)

const ingredientsController  = require('./controllers/ingredients_controller')
app.use('/api/ingredients', ingredientsController)

const recipeIngredientsController = require('./controllers/recipeIngredients_controller')
app.use('/api/recipeIngredients', recipeIngredientsController)


app.listen(process.env.PORT, () => {
    console.log(`💪 Signal on port: ${process.env.PORT}`);
});
    
// const sequelize_fixtures = require('sequelize-fixtures');
// const models = require('./models');
// sequelize_fixtures.loadFile('db.json', models).catch(function(err){
//     console.log(err)
// });

