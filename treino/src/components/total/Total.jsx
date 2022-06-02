import React, { useEffect ,useState} from "react";
import { useExtraction } from "../context/ExtractionContext";
import '../../styles/Table.scss'

export const Total=({values})=>{
    const {activeSumValue,setActiveSumValue}= useExtraction()
    const [total,setTotal]=useState(0)


    const getValues=()=>{

        const listValues=[]

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
            //    SumAllValues(listValues)

            }
            else if(values[i].type==='Venda'){

                let str=values[i].value
                var intC=str.replace('R$','')
                intC=intC.replace(',','.')
                intC=Number(intC)

                listValues.push(intC)
            //    SumAllValues(listValues)

            }


        }
        // console.log(listValues)
        SumAllValues(listValues)

    }
    const SumAllValues=(listValues)=>{
        let num=0
        for(let v=0;v<listValues.length;v++){
            num+=listValues[v]
            console.log(`${num} +${listValues[v]} = ${num+listValues[v]}`)

        }
        setTotal(num)
        setActiveSumValue(false)  

    }
    useEffect(()=>{
        if(activeSumValue){
            getValues() 
        }
    //     if(!activeSumValue){
    //         SumAllValues()
    //     }
    })
    // console.log(listValues)
    // console.log(total)

    return(
            <tr>
                <th>Total</th>

                <th><div>R$ {total}</div><span>{total>=0?('[Lucro]'):('[Prejuizo]')}</span></th>
            </tr>
    )
}