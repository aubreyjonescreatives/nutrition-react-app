import React, { useEffect, useState } from 'react';
import axios from 'axios'








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

    <h1>{foodItem.id}</h1>
   )
   
    })
    }
    
  
  </div>
)}
  
  export default Nutrition;
  