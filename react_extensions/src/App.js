import React,{ Component } from 'react';
import Mouse from "./components/09_renderProps/Mouse";

class App extends Component {
    render() {
        return (
            <div style={{ height: '100%' }}>
                <Mouse render={({ x, y }) => (
                    <h1>The mouse position is ({x}, {y})</h1>
                )}/>
            </div>
        );
    }
}

export default App;
