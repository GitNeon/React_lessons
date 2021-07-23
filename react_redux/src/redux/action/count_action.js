import {INCREMENT,DECREMENT} from "../constant";

// 用于执行动作的action函数
export const createIncrementAction = (data)=> { return {type: INCREMENT,data:data} };
export const createDecrementAction = (data)=> { return {type: DECREMENT,data:data} };
export const createIncrementAsyncAction = (data,time)=> {
  return (dispatch)=> {
    console.log('dispatch:',dispatch);
    setTimeout(function () {
      dispatch(createIncrementAction(data))
    },time)
  }
}
