import React from 'react';
import WelcomeStyle from './index.module.css';

export default class Welcome extends React.Component {

    render() {
        return (
            <div>
                <h2 className={WelcomeStyle.title}>这是welcome组件</h2>
            </div>
        );
    }

}
