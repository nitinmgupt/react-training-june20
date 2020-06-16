import React, {Component} from "react";

class TwoWayBinding extends Component {

    constructor(props) {
        super(props);
        this.state = {name:"Two-Way-Binding"};
        this.handleChange = this.handleChange.bind(this) ;
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (<div>
                    <h1>{this.state.name}</h1>
                    <input type="text" onChange={this.handleChange} value={this.state.name}/>
                </div>)
    }
}

export default TwoWayBinding

//<TwoWayBinding/>