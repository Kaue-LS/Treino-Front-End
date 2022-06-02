import React, { useEffect, useState } from "react";

import '../../styles/ExtractionList.scss'

import { useExtraction } from "../context/ExtractionContext";
import {  SendList} from "../lib/LocalStorage";
import { TableBody } from "../table/table_body/Table_body";
import { TableFooter } from "../table/table_footer/Table_footer";
import { TableHead } from "../table/table_head/Table_head";


export const ExtractionList=()=>{
    const {activeSearchValue,setActiveSearchValue,setActiveSumValue} =useExtraction()



    const [data,setData]=useState([])
    const [loadRemaining,setLoadRemaing]=useState(false)

    const SearchValue=()=>{
        let get=SendList()
        setData(get)
        setActiveSearchValue(false)
        setActiveSumValue(true)
    }
    
    const LoadRemainingValues=()=>{

        let get=SendList()
        setData(get)
        setLoadRemaing(true)
        setActiveSumValue(true)
        // var get= JSON.parse(getList())
        // for(let i=0; i<get.length;i++){
        //     console.log(i)
        //     console.log(get.length)
        //     // console.log(get[i])

        //     // List.push(get[i])
        //     // setData(List)
        //     console.log(data)
        // }
        // // List.push(get)
        // console.log('ta aq')
        // setLoadRemaing(true)
        // setActiveSumValue(true)
        // setActiveSearchValue(false)

    }

    useEffect(()=>{

        if(!loadRemaining){
            LoadRemainingValues()
        }
        else if(activeSearchValue){
           SearchValue()
        }
    
    },)
    
    // let get=JSON.parse(getList())
            // console.log(data)

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