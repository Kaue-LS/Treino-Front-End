import React, { useState } from "react"

import '../../styles/Form.scss'

import { useExtraction } from "../context/ExtractionContext"

import { Button } from "../button/Button"
import { Control } from "../control/Control"
import { Input } from "../input/Input"
import { Label } from "../label/Label"
import { setData} from "../lib/LocalStorage"
import { maskPrice } from "../lib/Mask"
import { Select } from "../select/Select"

export default function Form(){
    const {setActiveSearchValue} = useExtraction()

    const [type,setType]=useState('')
    const [name,setName]=useState('')
    const [value,setValue]=useState('')
    const [error,setError]=useState('')
    const AddExtraction=(e)=>{
      setError('')
      if(type.length===0 || name.length===0 || value.length===0){
        setError('Erro! Detectado campo vazío!')
      }
  
      else{
        setError('')
        let data={
          type,
          name,
          value
        }
        // SearchValue ira buscar os dados no localstorage
        setActiveSearchValue(true)
        // console.log(data)
        setData(data)
        // e.preventDefault()
  
      }
     
    }
    return(
        <form className='Add_Goods'>
        {error.length>1&&(
          <span className="Error">{error}</span>
        )}
        {/* Selecionar tipo de transição */}
        <Control classname={'Control Type_1'}>
          <Label classname={'Label'} text={'Tipo de transação'}/>
          <Select
           required={true}
           onChange={(e)=>setType(e.target.value)}
           options={
            [
            {'value':'Compra','name':'Compra'},
            {'value':'Venda','name':'Venda de mercadoria'},
           
          ]
            }
            classname={'Select'}
            />
        </Control>

        {/* Inserir nome da mercadoria */}
        <Control  classname={'Control Type_1'}>
          <Label  classname={'Label'} text={'Nome da mercadoria'}/>
          <Input  required={true} onChange={(e)=>setName(e.target.value)}  classname={'Input Type_1'} type={'text'} placeholder={'Input'} name={'nome_mercadoria'}/>
        </Control>

        {/* Inserindo valor */}
        <Control  classname={'Control Type_1'}>
          <Label  classname={'Label'} text={'Valor'}/>
          <Input value={value}  required={true}  onChange={(e)=>setValue(maskPrice(e.target.value))}  classname={'Input Type_1'} type={'text'} placeholder={'R$ 0,00'} name={'valor'}/>
        </Control>

        <Button onClick={()=>AddExtraction()} type={'button'} classname={'Button Add'} text={'Adicionar transação'}/>
        </form>
    )
}