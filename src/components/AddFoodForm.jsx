import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const AddFoodForm = (props) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)
    const [id, setId] = useState(uuidv4())

    const handleSubmit = event => {
        event.preventDefault()
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input value={name}
                onChange={event => {setName(event.target.value)}}
                />
            </label><br/>
            <label>
                Image
                <input value={image}
                onChange={event => {setImage(event.target.value)}}
                />
            </label><br/>
            <label>
                Calories
                <input value={calories}
                onChange={event => {setCalories(event.target.value)}}
                />
            </label><br/>
            <label>
                Servings
                <input value={servings}
                onChange={event => {setServings(event.target.value)}}
                />
            </label> <br/>
            <button type='submit' onClick={()=> props.newFood}>Create</button>
        </form>
     );
}
 
export default AddFoodForm;