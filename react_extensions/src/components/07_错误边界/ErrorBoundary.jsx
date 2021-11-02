import React from 'react';

export default class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error){
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.group();
    console.log('error', error);
    console.log('errorInfo', errorInfo);
    console.groupEnd();
  }

  render() {
    console.log('错误边界组件渲染');
    const { children } = this.props;
    const { hasError } = this.state;
    return(
      <>
        {
          hasError ? <h1>Opps...出错了</h1> : children
        }
      </>
    )
  }

}
