import React from "react"

import '../../../styles/Table.scss'

export const TableBody=({data,classname})=>{
    return(
        <tbody className={classname}>
        {data.map((item,index)=>(
            <tr key={index}>
               <td className="col-1">
                   <span>{item.type==='Venda'?('+'):('-')}</span>
                   <p>{item.name}</p>
               </td>
               <td className="col-2">{item.value}</td>
            </tr>
        ))}
    </tbody>
    )
}