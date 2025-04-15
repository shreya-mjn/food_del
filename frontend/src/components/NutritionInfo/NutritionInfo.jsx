import  { useState } from 'react';
import axios from 'axios';

const NutritionInfo = ({ foodName }) => {
  const [nutritionData, setNutritionData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(null);

  const fetchNutrition = async () => {
    try {
      const response = await axios.post('http://localhost:4000/get-nutrition', { food: foodName });
      setNutritionData(response.data); // Set the full array
      setShowPopup(true);
    } catch (err) {
      setError('Could not fetch nutrition data');
      console.error(err);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setNutritionData([]);
  };

  return (
    <div>
      <button className="info-btn" onClick={fetchNutrition}>
        Get Nutrition Info
      </button>
      
      {showPopup && (
        <div className="nutrition-popup">
          <div className="popup-content">
            <h3>Nutrition Info for {foodName}</h3>
            {nutritionData.length > 0 ? (
              <ul>
                {nutritionData.map((item, index) => (
                  <li key={index}>
                    <strong>{item.name}</strong>
                    <ul>
                      <li>Calories: {item.calories}</li>
                      <li>Fat: {item.fat_total_g} g</li>
                      <li>Protein: {item.protein_g} g</li>
                      <li>Sodium: {item.sodium_mg} mg</li>
                      <li>Carbohydrates: {item.carbohydrates_total_g} g</li>
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading...</p>
            )}
            <button className="close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default NutritionInfo;
