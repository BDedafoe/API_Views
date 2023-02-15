import React from "react";
import style from '../App.css';
  
const getRecipe = ({title,calories,image,ingredients, saturatedFats}) =>{
    
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient=>( 
                    <li >{ingredient.text}</li>
                ))}
            </ol>
                <p>Calories : {calories}</p>
                <h2>Saturated Fats: {saturatedFats}</h2>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}
export default getRecipe;
