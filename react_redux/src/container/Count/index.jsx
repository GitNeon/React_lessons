import CountUI from "../../components/Count";
import {connect} from "react-redux";
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/count_action";

/**
 * 返回对象作为UI组件的props属性值,该方法通常用于单纯的传递Object数据
 * @param state 来自于store中的值
 * @return {{count: number}}
 */
function mapStateToProps(state){
  return {
    count: state
  }
}

/**
 * 返回对象作为UI组件的props属性值,该方法通常用于传递具体执行动作的Action对象
 * @param dispatch
 */
function mapDispatchToProps(dispatch){
  return {
    increment: number => dispatch(createIncrementAction(number)),
    decrement: number => dispatch(createDecrementAction(number)),
    asyncIncrement: (number,time) => dispatch(createIncrementAsyncAction(number,time))
  }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI);
