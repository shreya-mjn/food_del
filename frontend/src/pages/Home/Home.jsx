import  { useState,useContext } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import BookTable from '../../components/BookTable/BookTable'
import MoodMenu from '../../components/MoodMenu/MoodMenu'
import { food_list } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

// import BookTable from '../../components/BookTable/BookTable'

const Home = () => {
  const { food_list } = useContext(StoreContext);


  const [category,setCategory] = useState("All")
  const [mood,setMood] = useState("All")
  

  // Filter logic
  const filteredFoodList = food_list.filter((item) => {
    if (mood !== 'All') {
      return item.mood === mood;
    }
    if (category !== 'All') {
      return item.category === category;
    }
    return true; // Default: Show all items
  });

  return (
    <>
      <Header/>
      {/* <ExploreMenu setCategory={setCategory} category={category}/> */}


      <ExploreMenu category={category} setCategory={(value) => {
        setCategory(value);
        setMood('All'); // Reset mood when category is selected
      }} />

      
      <MoodMenu mood={mood} setMood={(value) => {
        setMood(value);
        setCategory('All'); // Reset category when mood is selected
      }} />
      
      <FoodDisplay food_list={filteredFoodList} />
      {/* <FoodDisplay category={category} mood={mood}/> */}
      <BookTable/>
      <AppDownload/>
    </>
  )
}

export default Home
