export const Token_Extraction='&extraction';
export const Token_activeSearchValues='&activeSearchValue';
export const Token_ListExtraction='&TakeListExtraction'
export const List=[]

const setList =()=>{
    // list.push(JSON.parse(getList()))
    localStorage.setItem(Token_ListExtraction,JSON.stringify(List))
}

export const setData = data=>{ localStorage.setItem(Token_Extraction,JSON.stringify(data))
    List.push(data)
    setList()
}

export const getList=()=>localStorage.getItem(Token_ListExtraction)

export const deleteData=()=>localStorage.removeItem(Token_Extraction)

