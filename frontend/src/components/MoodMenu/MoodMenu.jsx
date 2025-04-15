import  { useContext } from 'react'
import './MoodMenu.css'
import { StoreContext } from '../../Context/StoreContext'
// import { mood_list } from '../../assets/assets'

const MoodMenu = ({mood,setMood}) => {

  const {mood_list} = useContext(StoreContext);
  
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Pick a Mood, We’ll Pick the Food!</h1>
      
      <div className="explore-menu-list">
        {mood_list.map((item,index)=>{
            return (
                <div onClick={()=>setMood(prev=>prev===item.mood_name?"All":item.mood_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.mood_image} className={mood===item.mood_name?"active":""} alt="" />
                    <p>{item.mood_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default MoodMenu;
