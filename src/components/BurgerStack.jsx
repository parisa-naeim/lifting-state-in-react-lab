// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return <><ul>
{props.selectedIngredients.map((item, index)=>{
  return <li key={index} style={{backgroundColor: item.color,color: "white"}}>{item.name}
  <button onClick={() => props.removeIngredient(item)}>Remove</button></li>
})}
    </ul></>;
  };
  
  export default BurgerStack;
  