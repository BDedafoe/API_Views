import React from "react";
import style from "../public/style.css" 
  
const Drink = ({name, image}) =>{
    
    return(
        <div className={style.drinks}>
            <h1>{name}</h1>
            <img className={style.image} src={image} alt=""/>
        </div>
    );  
} 
export default Drink;