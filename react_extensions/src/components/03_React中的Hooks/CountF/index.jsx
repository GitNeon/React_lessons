import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 基于函数式组件实现的求和功能
 * @return {JSX.Element}
 * @constructor
 */
function CountF(){

  /**
   * 使用useRef钩子函数完成对DOM节点的引用,另外多次渲染组件时，ref保存的引用不会丢失，也就是说，ref可以跨生命周期
   * @type {React.MutableRefObject<undefined>}
   */
  let inputRef = React.useRef();

  /**
   * useState 通过在函数组件里调用它来给组件添加一些内部 state。React 会在重复渲染时保留这个 state。useState
   * 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的
   * this.setState，但是它不会把新的 state 和旧的 state 进行合并。
   *
   * initialState： 在初始化时传入的初始数据
   * useState(initialState)返回一个数组，其中第一项是状态值，第二项是一个更新状态的函数
   * https://www.jianshu.com/p/700777ea9db0
   */
  let [count,setCount] = React.useState(0);
  let [step,setStep] = React.useState(1);

  /**
   * 有关说明：https://blog.csdn.net/fengqiuzhihua/article/details/103026684
   * 函数组件中没有生命周期，那么可以使用 useEffect 来替代
   * 如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook
   * 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合
   *
   * 运行时机：
   * useEffect 必然会在 render 的时候执行一次，其他的运行时机取决于以下情况
   * 1.有没有第二个参数。useEffect hook 接受两个参数，第一个是要执行的代码，第二个是一个数组，指定一组依赖的变量，
   *   其中任何一个变量发生变化时，此 effect 都会重新执行一次。
   * 2.有没有返回值。 useEffect 的执行代码中可以返回一个函数，在每一次新的 render 进行前或者组件 unmount 之时，都会执行此函数，进行清理工作。
   *
   * 重点总结：
   * 1.useEffect不完全是 componentDidMount， componentDidUpdate，componentWillUnmount 三个生命周期的结合体
   * 2.会在每次 render 的时候必定执行一次
   * 3.如果返回了函数，那么在下一次 render 之前或组件 unmount 之前必定会运行一次返回函数的代码
   * 4.如果指定了依赖数组，且不为空，则当数组里的每个元素发生变化时，都会重新运行一次
   * 5.如果数组为空，则只在第一次 render 时执行一次，如果有返回值，则同 3
   */
  React.useEffect(()=>{
    let timer = setInterval(()=> {
      setStep( step => step + 1)
    },1000)

    // 借助第useEffect第二个特性可以实现定时器清理
    return ()=> {
      console.log('清理定时器方法');
      clearInterval(timer)
    }
    // 第二个参数传递空数组，表示不监测任何变量，使得return的函数只会在umout时执行一次
  },[]);

  const show = ()=>{
    const {value} = inputRef.current;
    alert(value)
  }

  const unmount = ()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  const add = ()=>{
    setCount(count => count + 1);
  }

  return (
    <div>
      <input type="text" ref={inputRef}/>
      <h2>当前求和为：{count}</h2>
      <h3>当前步进：{step}</h3>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点我提示数据</button>
    </div>
  )
}

export default CountF
