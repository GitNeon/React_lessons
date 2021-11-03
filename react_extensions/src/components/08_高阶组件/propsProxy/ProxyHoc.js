import React from 'react';

/**
 * 包装组件，返回另外一个组件
 * 此组件完成属性代理，可以操作props，refs等
 * @param WrappedComponent
 */
const propsProxyHoc = WrappedComponent => class extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        console.log('click');
        console.log('this: ',this);
        console.log('instanceComponent: ',this.instanceComponent);
    }

    render() {
        return (
            <WrappedComponent {...this.props}
                              handleClick={this.handleClick}
                              ref={ element => this.instanceComponent = element}
            />
        )
    }

}

export default propsProxyHoc;
