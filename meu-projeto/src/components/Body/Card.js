import React from "react";
import styles from './Body.module.css'

var imagens = [
    {
      cardImg: './img/card1.jpeg'
    },{
      cardImg: './img/card2.jpeg'
    },{
      cardImg: './img/card3.jpeg'
    },{
      cardImg: './img/card4.jpeg'
    },{
      cardImg: './img/card5.jpeg'
    },{
      cardImg: './img/card6.jpeg'
    }]
    


function Card(){
    return(
            imagens.map(function(element){
              return <div> 
                <img  className={styles.cardImgcss} src = {element.cardImg}></img>
               </div>
            })
    );
}

export default Card