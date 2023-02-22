import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Meals = () => {
    const [meals,setMeals] = useState([]);
    const getData = async()=>{
        const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        setMeals(data.meals)
        console.log(meals);
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
      meals
    </div>
  )
}

export default Meals