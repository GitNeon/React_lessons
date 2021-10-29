import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRoute from './router.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MyRoute/>
      </BrowserRouter>
    );
  }
}
export default App;
