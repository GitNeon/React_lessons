import React, {Component} from 'react';
import ProxyHoc from "./ProxyHoc";

class Usual extends Component {

    render() {
        console.log('props: ',this.props);
        return (
            <div>
                <h2 onClick={ this.props.handleClick }>Usual Props: { JSON.stringify(this.props) }</h2>
            </div>
        );
    }
}

export default ProxyHoc(Usual);
