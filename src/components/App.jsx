// src/App.jsx

import { useState } from 'react';
import './App.css';
import BurgerStack from './BurgerStack';
import IngredientList from './IngredientList';


export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];





const App = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const choosenIngredient =(ingredient)=>{
    setSelectedIngredients([...selectedIngredients,ingredient]);

  }
  const removeIngredient =(ingredient)=>{
    const index = selectedIngredients.findIndex((item)=>item.name == ingredient.name);
    const newArr = [...selectedIngredients];
    newArr.splice(index, 1);
    setSelectedIngredients(newArr);
  }


  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList ingredients={availableIngredients} choosenIngredient={choosenIngredient}/>
      <BurgerStack selectedIngredients={selectedIngredients} removeIngredient={removeIngredient}/>
      </section>
    </main>
  );
};

export default App;