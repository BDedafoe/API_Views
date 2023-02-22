import React from "react";
import style from '../App.css';
  
const getScores = ({title,scores,sport_key}) =>{
    
    return(
        <div className={style.scores}>
            <h1>{title}</h1>
            <ol>
                {sport_key.map(sport_key => ( 
                    <li >{sport_key.text}</li>
                ))}
            </ol>
                <h2>Scores: {scores}</h2>
        </div>
    );
}
export default getScores;

