import React from "react";
import '../../styles/Input.scss'
export const Input=({type,placeholder,name, classname, onChange,required,value,min})=>{
    return <input required={required?required:false} value={value} onChange={onChange} className={classname?classname:''} type={type} name={name} placeholder={placeholder} minLength={min}/>
}