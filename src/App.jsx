import {useState} from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox.jsx"
import AddFoodForm from "./components/AddFoodForm.jsx"

function App() {
  const [foods, setFoods] = useState(foodsJson)

  const deleteFood = foodId => {
    setFoods(foods.filter((oneFood) => {
      return oneFood.id !== foodId}))
    }
  
  const addFood = () => {
    console.log(AddFoodForm)
    return (setFoods(foods.push((AddFoodForm))))
    
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      
      <AddFoodForm newFood={addFood}/>
      <FoodBox food={foods} removeFood={deleteFood}/>

    </div>
  );
}

export default App;
