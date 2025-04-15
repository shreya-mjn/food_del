import express  from "express"
import axios from "axios"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import foodRouter from "./routes/foodRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import { request } from "express"
// import moodRouter from "./routes/moodRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000;


// middlewares
app.use(express.json())
app.use(cors())

// db connection
connectDB()

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)
// app.use("/api", moodRouter);

app.get("/", (req, res) => {
    res.send("API Working")
  });

  app.post('/api/test', (req, res) => {
    res.send({ message: 'Test route working!' });
  });

  app.post('/get-nutrition', async (req, res) => {
    const { food } = req.body;

    try {
        const response = await axios.get('https://api.calorieninjas.com/v1/nutrition', {
            params: { query: food },
            headers: {
                'X-Api-Key': process.env.API_NINJA_KEY // Replace with your API key
            }
        });

        // Return the full list of items in the response
        if (response.data && response.data.items) {
            res.json(response.data.items); // Send all items
        } else {
            res.status(404).json({ error: 'No nutrition data found' });
        }
    } catch (error) {
        console.error('Error fetching nutrition data:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});

//   app.post('/get-nutrition', (req, res) => {
//     const food = req.body.food; // Get the food name from the request body
//     // Fetch the nutrition data here (from a database, API, etc.)
//     res.json(nutritionData); // Send the nutrition data back to the frontend
// });

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))