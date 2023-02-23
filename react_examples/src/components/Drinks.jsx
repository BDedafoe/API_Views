import React from "react";
import style from '../App.css';
  
const Drink = ({name,strCategory,glass,instructions,image,strIngredient1}) =>{
    
    return(
        <div className={style.drinks}>
            <h1>{name}</h1>
            <ol>
                {strIngredient1}
            </ol>
                <p>Category : {strCategory}</p>
                <p>Glass : {glass}</p>
                <p>Instructions : {instructions}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );  
} 
export default Drink;