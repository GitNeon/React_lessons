/*
  1.使用redux,通过命令yarn add redeux安装
  2.一个应用只能有一个store
 */
// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore,applyMiddleware } from 'redux';
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';
// 引入组件count_reducer,后续可以进一步优化，封装store.js
import countReducer from './count_reducer'
// 暴露store
export default createStore(countReducer,applyMiddleware(thunk));
