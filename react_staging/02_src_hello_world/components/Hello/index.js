import React from 'react';
import HelloStyle from './index.module.css'

export default class Hello extends React.Component {

    render() {
        return (
            <div>
                <h1 className={HelloStyle.title}>这是Hello组件</h1>
            </div>
        );
    }

}
