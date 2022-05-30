import React from "react";
import '../../styles/Input.scss'

export const Select=({classname,options,onChange,required})=>{
    return(
        <select required={required?required:false} onChange={onChange} defaultValue={''} className={classname?classname:''}>
            <option value={''} disabled>Selecionar</option>
            {options.map((item,index)=>(
                <option  key={index} value={item.value}>{item.name}</option>
            ))}
          

        </select>
    )
}