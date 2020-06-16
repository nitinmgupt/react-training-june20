import React, {Component} from 'react';


class TwoWayBindingRef extends Component{
    constructor(props) {
        super(props);
        this.state = { valuedisplay: 0 };
        this.changeHandle=this.changeHandle.bind(this);
    }

    changeHandle(event){
        this.setState({
            valuedisplay: this.refs.numberbox.value==="" ? 0: parseInt(this.refs.numberbox.value)
        });
    }

    render(){
        return (
            <div>
                <input type="data"  ref="numberbox" onChange={this.changeHandle} value={this.state.valuedisplay} /><br/>
                <div><h4>{this.state.valuedisplay}</h4></div>
            </div>
        );
    }
}
export default TwoWayBindingRef ;