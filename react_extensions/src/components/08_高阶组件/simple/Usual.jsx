import React,{ Component } from "react";
import SimpleHoc from './SimpleHoc';

class Usual extends Component {
    render() {
        console.log('pros:',this.props);
        return (
            <div>
                <h3>This is Usual Component...</h3>
            </div>
        )
    }
}

export default SimpleHoc(Usual);
