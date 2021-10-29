import React, { lazy,Suspense } from 'react';
import { Route,HashRouter , Switch } from 'react-router-dom';

// 路由懒加载
const About = lazy(() => import('./pages/About/index'));
const Detail = lazy(() => import('./pages/Detail/index'));

function Router() {
  return(
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>} maxDuration={1000}>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/detail" component={Detail}/>
        </Switch>
      </Suspense>
    </HashRouter>
  )
}

export default Router;
