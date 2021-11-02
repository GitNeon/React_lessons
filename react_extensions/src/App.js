import React, {Component} from 'react';
import ErrorBoundary from './components/07_错误边界/ErrorBoundary';
import Count from './components/07_错误边界/Count';

class App extends Component {
    render() {
        return (
            <div>
                <ErrorBoundary>
                    <Count/>
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;
