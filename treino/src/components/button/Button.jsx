import React from "react";
import '../../styles/Button.scss'
export const Button=({text ,classname,onClick,type})=>{
    return <button type={type} onClick={onClick?onClick:''} className={classname?classname:''}>{text}</button>
}