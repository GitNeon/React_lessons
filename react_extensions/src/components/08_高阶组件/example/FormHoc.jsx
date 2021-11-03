import React, { Component } from 'react';

const formCreate = WrappedComponent => class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: {},
        }
    }

    handleSubmit = () => {
        // 在这里可以拿到state中村的值，并进行发送请求
        console.log(this.state.fields);
    }

    getField = (fieldName,e) => {
        // 在这里可以收集字段并做一些验证
        const { fields } = this.state;
        fields[fieldName] = e.target.value;
        this.setState({
            fields,
        })
    }

    render() {
        const props = {
            ...this.props,
            handleSubmit: this.handleSubmit,
            getField: this.getField,
        }
        return (<WrappedComponent
            {...props}
        />);
    }
};
export default formCreate;
