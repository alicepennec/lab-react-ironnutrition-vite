const FoodBox = (props) => {

       return (
        <div>
        {props.food.map((oneFood) => {
            return(
              <div key={oneFood.id}>
                <p>{oneFood.name}</p>
    
                <img src={oneFood.image} style={{height: "100px"}} />
    
                <p>Calories: {oneFood.calories}</p>
                <p>Servings {oneFood.servings}</p>
    
                <p>
                  <b>Total Calories: {oneFood.calories * oneFood.servings}</b> kcal
                </p>
    
                <button onClick={() => props.removeFood(oneFood.id)}>Delete</button>
              </div>
            )
          })}
          </div>
       )
}
 
export default FoodBox;