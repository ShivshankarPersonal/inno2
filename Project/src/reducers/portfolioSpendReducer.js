const portfolioSpendReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANNEL_MIX':
      console.log(state)
      if(action.data){
        var firstScenarioDataList = action.data.filter(ele=> ele[0] === "1");
        var accounts = [];
        var physicians = [];
        var patients = [];
        firstScenarioDataList.forEach((record,index) =>{
          if(record[1]=== "Accounts"){
            accounts.push(
                {
                  name:record[2],
                  suggestedMix:record[4],
                  currentMix:record[3],
                  id:index
                }
            )
          }else if(record[1]=== "Physicians"){
            physicians.push(
                {
                  name:record[2],
                  suggestedMix:record[4],
                  currentMix:record[3],
                  id:index
                }
            )
          }else if(record[1]=== "Patients"){
            patients.push(
                {
                  name:record[2],
                  suggestedMix:record[4],
                  currentMix:record[3],
                  id:index
                }
            )
          }

        });

        //state.accounts = accounts;
        //state.physicians = physicians;
        //state.patients = patients;
        //return state;
        return {'accounts':accounts,'physicians':physicians,'patients':physicians};
      }
        break;
    default:
      return state
  }
}




export default portfolioSpendReducer;


export const getAccountsData = (state) =>{
    console.log('getAccountsData')
    console.log(state.accounts)
    //const deepCloneOfNestedObject = JSON.parse(JSON.stringify(nestedObject))
    //var ar =[
    //    {name: "KAM", suggestedMix: "30", currentMix: "20", id: 0},
    //    {name: "KAM1", suggestedMix: "30", currentMix: "20", id: 1},
    //    {name: "KAM2", suggestedMix: "30", currentMix: "20", id: 2}
    //]
    //return ar;
    if(state.accounts){
        //return Object.create(state.accounts)
        return JSON.parse(JSON.stringify(state.accounts))
        //return ar
    }else{
        return []
    }
    //if(!state.hasOwnProperty()){
    //    return state.accounts = []
    //}else{
    //    return state
    //}
    
}