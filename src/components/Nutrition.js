import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LazyLoad from 'react-lazyload'
import {Avatar, ListItem, ListItemAvatar} from '@material-ui/core'






const Nutrition = () => {


const [nutritionData, setNutritionData] = useState({
    foodList: []
})


const fetchNutrition = () => {
axios.get('https://api.spoonacular.com/recipes/716429/information?', {
params: {'apiKey': process.env.REACT_APP_NUTRITION_API_KEY}

})
.then(function (response) {
    setNutritionData({
    foodList: response.data.extendedIngredients
})
})
}

useEffect(() => {
    fetchNutrition()
})

return (
     
<div>
   {nutritionData.foodList.map((foodItem) => {
    return (
    <ListItem>
    <ListItemAvatar>
   <LazyLoad> 
    <Avatar
    alt={'Avatar'}
    src={foodItem.img}
    >

    </Avatar>
    </LazyLoad>
    </ListItemAvatar>
    </ListItem>
    
   )
   
    })
    }
    
  
  </div>
)}
  
  export default Nutrition;
  