import React,{createContext,useState,useContext} from "react";

export const ExtractionContext= createContext()
// Vai ser o elemento global
export default function ExtractionProvider({children}){
    const [activeSearchValue,setActiveSearchValue]=useState(false)
    const [activeSumValue,setActiveSumValue]=useState(false)

    return(
        <ExtractionContext.Provider value={{
            activeSearchValue,setActiveSearchValue,activeSumValue,setActiveSumValue
        }}>
            {children}
        </ExtractionContext.Provider>
    )
}
export function useExtraction(){
    const Context=useContext(ExtractionContext)
    if(!Context) throw new Error('useExtraction deve ser usado dentro do Count Provider')
    const {activeSearchValue,setActiveSearchValue,activeSumValue,setActiveSumValue}=Context
    return {activeSearchValue,setActiveSearchValue,activeSumValue,setActiveSumValue}
}