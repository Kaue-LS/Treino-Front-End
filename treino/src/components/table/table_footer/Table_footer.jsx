import React from "react"
import { Total } from "../../total/Total"

import '../../../styles/Table.scss'

export const TableFooter=({data,classname})=>{
    return(
    <tfoot className={classname}>
        <Total values={data}/>
    </tfoot>
    )
}