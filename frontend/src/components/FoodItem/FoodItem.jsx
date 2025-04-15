import  { useContext, useState} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
import NutritionInfo from '../NutritionInfo/NutritionInfo';
 

const FoodItem = ({ image,io,  name, price, desc , id, mood }) => {

    const [itemCount, setItemCount] = useState(0);
    const {cartItems,addToCart,removeFromCart,url,currency} = useContext(StoreContext);

    const [showNutrition, setShowNutrition] = useState(false);
    

  const handleClick = () => {
    setShowNutrition(true); // Show the nutrition info when the button is clicked
  };
        const navigate = useNavigate();
    

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={io} alt="" />
                    <button className="info-btn" onClick={handleClick}>
                        <i className="fas fa-info-circle"></i>            
                    </button>
                    {showNutrition && <NutritionInfo foodName={name} />}
                {!cartItems[id]
                ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                
                :<div className="food-item-counter">
                        <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="" />
                </div>
                
                <p className="food-item-desc">{desc}</p>
               
                <p className="food-item-price">{currency}{price}</p>
                <button onClick={()=>navigate('/cart')}>Go to Cart</button>
                
                
            </div>
        </div>
    )
}

export default FoodItem
