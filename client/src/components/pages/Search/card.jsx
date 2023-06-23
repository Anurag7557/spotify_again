import React from "react";
import "./card.css";
import {AiOutlineHeart,AiOutlinePlusCircle} from 'react-icons/ai'
import { useState } from "react";
function Card(props ) {
    const [dis,setdis] = useState("none")
    function mouseon(){
        setdis("block")
    }
    function mouseout(){
        setdis("none")
    }
    

    return (
        <div className="card" onMouseOver={mouseon} onMouseOut={mouseout}>
            <div className="albumimg">
                <img src={props.image} className="album"></img>
            </div>
                <div className="information">
                    <div className="title">{props.name}</div>
                    <div className="artist">{props.artist}</div>
                </div>
            <div className="albumname">
                    {props.name}
            </div>
            <div className="time">
                    4:00
            </div>
            <div id="likeadd">
                <AiOutlineHeart id="heart" style={{display:dis}}/>
                <AiOutlinePlusCircle id="heart" style={{display:dis}}/>

                
            </div>
            
        </div>
    );
}
export default Card;
