import {INCREMENT,DECREMENT} from "./constant";
/**
 * 1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
 * 2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
 * @param preState
 * @param action
 */
export default function countReducer(preState = 0, action){
  console.log('preState:',preState);
  console.log('action:',action);
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data*1
    case DECREMENT:
      return preState - data*1
    default:
      return preState
  }
}
