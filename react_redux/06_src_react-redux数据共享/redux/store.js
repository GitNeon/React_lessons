/*
  1.使用redux,通过命令yarn add redeux安装
  2.一个应用只能有一个store
 */
// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore,applyMiddleware,combineReducers } from 'redux';
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';
import countReducer from "../redux/reducers/count_reducer";
import personReducer from "../redux/reducers/person_reducer";

// 汇总所有reducer
const allReducer = combineReducers({
  countNumber: countReducer,
  personList: personReducer
});

// 暴露store
export default createStore(allReducer,applyMiddleware(thunk));
