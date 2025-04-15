// import  { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { useState } from 'react'
// import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({food_list}) => {

  // const {food_list,mood_list} = useContext(StoreContext);
  const [category,setCategory] = useState("All")

  
  return (
    <div className='food-display' id='food-display'>
      <h2>Explore The Menu</h2>
      <div className='food-display-list'>
        {food_list.map((item)=>{
          if ( category==="All"  || category===item.category) {
            return <FoodItem key={item._id} image={item.io} io={item.io} name={item.name} desc={item.description} price={item.price} id={item._id} mood={item.mood}/>
          } 
        })}
        
      </div>
    </div>
  )
}

export default FoodDisplay
