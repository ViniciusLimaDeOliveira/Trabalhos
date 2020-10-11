 
 function altNumber(novoNum){
    return{
        type:'New_Number1',
        payload: novoNum
    }//Action
}//create Action

 function altNumber2(novoNum){
    return{
        type:'New_Number2',
        payload: novoNum
        }//Action
}//create Action

export {altNumber,altNumber2}