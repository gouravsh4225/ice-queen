import React, { useState } from 'react';
import FlavourDetails from "./FlavourDetails";
import "../Flavour/Flavour.css";

const flavourItems = [
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 1"},
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 2"},
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 3"},
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 4"},
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 5"},
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 6"},
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 7"},
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 8"},
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 9"},
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 10"},
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 11"},
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 12"},
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 13"},
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 14"},
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 15"},
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 16"},
    {image:"https://via.placeholder.com/600/92c952",flavourName:"Flavour 17"},
]



 function FlavourList() {
     const [scrollPoint,setScrollPoint] = useState(0);

     const slideRight = () =>{
         const element =document.querySelectorAll('.flavour__items');
         if(scrollPoint  < element[0].scrollWidth) {
             let point = scrollPoint  +  element[0].firstChild.clientWidth;
             element[0].scroll({
                top: 0,
                left: point,
                behavior: 'smooth'
              })
             setScrollPoint(point)
         }
     }
     const slideLeft = () =>{
         if(scrollPoint > 0) {
            const element = document.querySelectorAll(".flavour__items");
            let points  = scrollPoint - element[0].firstChild.clientWidth;
            element[0].scroll({
                top:0,
                left:points,
                behavior:"smooth"
            })
            setScrollPoint(points)
         }
     }

    return (
        <React.Fragment>
        <div className="flavourList__container">
                <h3>Flavour</h3>
                <div className="flavour__list">
                    <div className={`left__icon`} onClick={e=>slideLeft()}>&#8592;</div>
                    <div className="flavour__items">
                        {flavourItems.map((item)=>(
                            <div className="flavour__item">
                        <img src={item.image}  className="flavour__image"/>
                    <button className="button-ctc mt-16" >
                        {item.flavourName}
                    </button>
                        </div>
                        ))}
                    
                    </div>
                    <div className="right__icon" onClick={e=>slideRight()}>&#8594;</div>
        <div className="flavour_details">
                            <FlavourDetails />
        </div>
                </div>
        </div>
        </React.Fragment>
    )
}

export default FlavourList;
