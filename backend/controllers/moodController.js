// import MoodModel from '../models/MoodModel.js';

// // Get all moods
//  const getAllMoods = async (req, res) => {
//   try {
//     const moods = await MoodModel.find();
//     res.json(moods);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Add a new mood
//  const addMood = async (req, res) => {
//     console.log(req.body);
//   const { mood_name,  mood_image, recommended_items } = req.body;
//   try {
//     const newMood = new MoodModel({ mood_name, mood_image, recommended_items });
//     await newMood.save();
//     res.status(201).json({ message: 'Mood added successfully!' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Fetch recommendations for a specific mood
//  const getMoodRecommendations = async (req, res) => {
//   try {
//     const mood = await MoodModel.findOne({ mood_name: req.params.mood_name });
//     if (!mood) return res.status(404).json({ message: 'Mood not found' });
//     res.json(mood.recommended_items);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export { getAllMoods, addMood, getMoodRecommendations};
