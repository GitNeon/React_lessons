import React, {Component} from 'react';

/**
 * React高阶组件,包装其他组件，这个组件将会返回一个另一个组件
 * @param WrappedComponent
 * @return {{}}
 * @constructor
 */
const SimpleHoc = WrappedComponent => {
    console.log('SimpleHoc....');
    return class extends Component {
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}

export default SimpleHoc;
