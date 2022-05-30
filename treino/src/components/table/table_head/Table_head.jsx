import React from "react"

import '../../../styles/Table.scss'

export const TableHead=({data,classname})=>{
    return(
        <thead className={classname}>
        <tr>
          {data.map((item,index)=>(
             <th key={index}>{item}</th> 
          ))}

        </tr>
        </thead>
    )
}