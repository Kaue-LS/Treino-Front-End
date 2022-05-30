import React, { useEffect ,useState} from "react";
import { useExtraction } from "../context/ExtractionContext";
import '../../styles/Table.scss'

export const Total=({values})=>{
    const {activeSumValue,setActiveSumValue}= useExtraction()
    const listValues=[]
    const [total,setTotal]=useState(0)

    const getValues=()=>{
        for(let i=0;i<values.length;i++){

            if(values[i].type==='Compra'){

                let str=values[i].value
                var intV=str.replace('R$','')
                intV=intV.replace(',','.')
                intV=intV.replace(' ','')
                intV=intV.replace(intV[0],`-${intV[0]}`)
                intV=Number(intV)
                // console.log(intV)
   
               listValues.push(intV)
               SumAllValues(listValues)

            }
            else if(values[i].type==='Venda'){

                let str=values[i].value
                var intC=str.replace('R$','')
                intC=intC.replace(',','.')
                intC=Number(intC)

                listValues.push(intC)
               SumAllValues(listValues)

            }

        }

    }
    const SumAllValues=()=>{
        for(let v =0;v<listValues.length;v++){
            setTotal(total+listValues[v])
            // console.log(total)
        }
    }
    useEffect(()=>{
        if(activeSumValue){
            getValues() 
            setActiveSumValue(false)  
        }
        // if(!activeSumValue){
        //     SumAllValues()
        // }
    })
    // console.log(listValues)

    return(
            <tr>
                <th>Total</th>

                <th><div>R$ {total}</div><span>{total>0?('[Lucro]'):('[Prejuizo]')}</span></th>
            </tr>
    )
}