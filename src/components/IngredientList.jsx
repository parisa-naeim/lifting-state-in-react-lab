// src/components/IngredientList.jsx
const IngredientList = (props) => {
    return <><ul>
      {props.ingredients.map((item, index)=>{
      return <li key={index} style={{backgroundColor: item.color,color: "white"}}>{item.name}
       <button onClick={()=>
          props.choosenIngredient(item)
      }>Add</button></li>
     

    })}</ul></>
    ;
  };
  
  export default IngredientList;
  