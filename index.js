require("dotenv").config();
const PORT = process.env.PORT || 3010;
const express = require("express");
const app = express();
const { Sequelize } = require('sequelize')
const recipes = require('./controllers/recipes_controller')

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

// const stagesController = require('./controllers/stages_controller')
// app.use('/stages', stagesController)

// app.use(express.json());

// //retrieving recipes http://localhost:3005/getRecipes
// app.get("/api/recipes", (req, res) => {
//     console.log("route handler ran");
//     res.status(200).json({
//         status: "success",
//         data: {
//             countries: ["america", "canada", "russia"],
//         },
//     });
// });

// //Retrieve one recipe
// app.get("/api/recipes/:id", (req, res) => {
//     console.log(req);
//     res.status(200).json({
//         status: "success",
//         data: {
//             countries: ["america", "canada", "russia"],
//         },
//     });
// });

// //Creating new recipe
// app.post("/api/recipes", (req, res) => {
//     console.log(req.body);
//     res.status(201).json({
//         status: "success",
//         data: {
//             countries: ["america", "canada", "russia"],
//         },
//     });
// });

// //Update recipes
// app.put("/api/recipes/:id", (req, res) => {
//     console.log(req.params.id);
//     console.log(req.body);
//     res.status(200).json({
//         status: "success",
//         data: {
//             countries: ["america", "canada", "russia"],
//         },
//     });
// });

// //Delete recipe
// app.delete("/api/recipes/:id", (req, res) => {
//     res.status(204).json({
//         status: "success",
//     });
// });

app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
});