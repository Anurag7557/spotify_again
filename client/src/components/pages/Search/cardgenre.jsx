import React from "react";
import "./cardgenre.css";
import {useNavigate} from "react-router-dom";
function Cardgenre(props ) {
    const navigate = useNavigate();
    console.log(props.name);
    var url= `/genre/${props.name}`;
    return (
        <div className="cardgenre" onClick={()=>{
           navigate(url); 
        }} style={{backgroundColor:`${props.color}`}} >
            <div className="info">
                    <div className="title">{props.name}</div>
            </div>
            <div className="image">
                <img src={props.image} className="imagegenre"></img>
            </div>
            
        </div>
    );
}
export default Cardgenre;