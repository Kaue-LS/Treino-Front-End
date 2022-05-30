import React from "react"
import '../../styles/Control.scss'
export const Control=({children,classname})=>{
    return(
        <div className={classname?classname:''}>
            {children}
        </div>
    )
}