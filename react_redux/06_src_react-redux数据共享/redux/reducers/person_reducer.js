import {ADD_PERSON} from "../constant";

export default function personReducer(preState = [], action){
  console.log('preState:',preState);
  console.log('action:',action);
  const {type,data} = action;
  if(type === ADD_PERSON){
    return [data,...preState]
  }
  return preState;
}
