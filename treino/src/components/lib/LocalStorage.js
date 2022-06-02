export const Token_Extraction = "&extraction";
// export const Token_activeSearchValues='&activeSearchValue';
export const Token_ListExtraction = "&TakeListExtraction";
const List = [];


// Irá pegar a lista e colocar a data recebida pelo form
// e vai pegar os dados existentes e armazena-los novamente no localstorage
const setList = (data) => {
    if(data){
        List.push(data)
        localStorage.setItem(Token_ListExtraction, JSON.stringify(List));
    }else{
      let get=JSON.parse(getList())
      if(!get){
        return false
      }else{
        for(let i=0; i<get.length;i++){
        List.push(get[i])
        }
        // console.log(List)
        localStorage.setItem(Token_ListExtraction, JSON.stringify(List));
      }
  
    }
};

export const setData = (data) => {
  localStorage.setItem(Token_Extraction, JSON.stringify(data));
  setList(data);

};

// Pegar as listas
export const getList = () => {
  let get = localStorage.getItem(Token_ListExtraction);
  if (get === null || !get) {
    return false;
  }else{
    return get
  }
};

export const SendList=()=>{
  return List
}
// Começa ja verificando se há valores armazenados no LocalStorage
setList()
