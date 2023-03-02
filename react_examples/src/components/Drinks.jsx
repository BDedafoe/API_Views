import React from "react";
import style from "../public/style.css" 
  
const Drink = ({name, image, glass, instructions, ingredients, measure}) => {
    


    return(
        <div className="drinks_list">
        <div className={style.drinks}>
            <h1>{name}</h1>
        <div className="instructions_container">
            <h3>Instructions</h3><h3>{instructions}</h3>
        </div>
        <h2>Served in: {glass}</h2>
            <img className={style.image} src={image} alt=""/> 
        <div className="prepare">
            <div className="left_side">
                {measure}
            </div>
            <div className="right_side">
                {ingredients}
            </div>
        </div>    
        </div>
        </div>
    );  
} 
export default Drink;