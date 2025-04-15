import userModel from "../models/userModel.js";

// Add to user cart
const addToCart = async (req, res) => {
   try {
      if (!req.body.userId || !req.body.itemId) {
         return res.json({ success: false, message: "Missing userId or itemId" });
      }

      let userData = await userModel.findOne({ _id: req.body.userId });
      
      if (!userData) {
         return res.json({ success: false, message: "User not found" });
      }

      if (!userData.cartData) {
         userData.cartData = {}; // Initialize cartData if missing
      }

      // Add or update the item in the cart
      if (!userData.cartData[req.body.itemId]) {
         userData.cartData[req.body.itemId] = 1; // Add item with count 1
      } else {
         userData.cartData[req.body.itemId] += 1; // Increment the item count
      }

      // Save the updated cartData
      await userData.save();

      res.json({ success: true, message: "Added To Cart" });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error adding to cart" });
   }
};

// Remove food from user cart
const removeFromCart = async (req, res) => {
   try {
      if (!req.body.userId || !req.body.itemId) {
         return res.json({ success: false, message: "Missing userId or itemId" });
      }

      let userData = await userModel.findById(req.body.userId);

      if (!userData) {
         return res.json({ success: false, message: "User not found" });
      }

      if (!userData.cartData || !userData.cartData[req.body.itemId] || userData.cartData[req.body.itemId] <= 0) {
         return res.json({ success: false, message: "Item not found in cart" });
      }

      // Decrease the item count
      userData.cartData[req.body.itemId] -= 1;

      // If item count reaches zero, remove it from the cart
      if (userData.cartData[req.body.itemId] === 0) {
         delete userData.cartData[req.body.itemId];
      }

      // Save the updated cartData
      await userData.save();

      res.json({ success: true, message: "Removed From Cart" });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error removing from cart" });
   }
};

// Get user cart
const getCart = async (req, res) => {
   try {
      if (!req.body.userId) {
         return res.json({ success: false, message: "Missing userId" });
      }

      // Find the user by ID
      let userData = await userModel.findById(req.body.userId);

      // Check if userData is null or undefined
      if (!userData) {
         return res.json({ success: false, message: "User not found" });
      }

      // If cartData does not exist, return an empty cart
      if (!userData.cartData) {
         return res.json({ success: true, cartData: {} }); // Return empty cart if no cart data
      }

      res.json({ success: true, cartData: userData.cartData });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error retrieving cart" });
   }
};

export { addToCart, removeFromCart, getCart };
