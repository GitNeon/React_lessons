import React, {Component,lazy,Suspense} from 'react';
import Loading from "./Loading";

const Home = lazy(()=> import('./Home') )

class Index extends Component {

  state = {
    loading: false
  }

  loadingHome = ()=>{
    this.setState({ loading: true})
  }

  render() {
    return (
      <div>
        <button onClick={this.loadingHome}>点我加载Home</button>
        {/*Suspense用来处理懒加载组件没加载完成时候的处理，通常用于Loading*/}
        {
          this.state.loading === false ? <h4>未加载Home</h4> : <Suspense fallback={<Loading/>}><Home/></Suspense>
        }
      </div>
    );
  }
}

export default Index;
