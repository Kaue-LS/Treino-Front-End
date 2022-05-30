import React, { useEffect, useState } from "react";

import '../../styles/ExtractionList.scss'

import { useExtraction } from "../context/ExtractionContext";
import { getList,deleteData, List} from "../lib/LocalStorage";
import { TableBody } from "../table/table_body/Table_body";
import { TableFooter } from "../table/table_footer/Table_footer";
import { TableHead } from "../table/table_head/Table_head";


export const ExtractionList=()=>{
    const {activeSearchValue,setActiveSearchValue,setActiveSumValue} =useExtraction()

    let list1=JSON.parse(getList())
    var list3=list1.concat(List)
    // console.log(list)
    // List.concat(list)

    const [data,setData]=useState(list3)


    const SearchValue=()=>{
        let get=JSON.parse(getList())
        setData(get)
        setActiveSearchValue(false)
        setActiveSumValue(true)
        deleteData()
    }

    useEffect(()=>{

        // Buscar dados no localStorage
        if(activeSearchValue){
           SearchValue()
        }
    
    })
    
    // let get=JSON.parse(getList())
            console.log(List)

    return(
        <div className="Extraction_List">
            <h3 className="Title">Extrato de transações</h3>
            {data.length===0 ||!data?(
                <h4>Nenhuma transação realizada.</h4>
            ):(
                 <div className="Extraction_Table">
                 <table className="Table">
                   <TableHead classname={'Table_Head'} data={['Mercadoria','Valor']}/>
                    <TableBody classname={'Table_Body'}  data={data}/>
                     <TableFooter classname={'Table_Footer'} data={data}/>
                 </table>
             </div>
            )}
           
        </div>
    )
}