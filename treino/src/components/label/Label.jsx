import React from "react"
import '../../styles/Label.scss'
export const Label=({text,classname})=>{
    return <label className={classname?classname:''}>{text}</label>

}