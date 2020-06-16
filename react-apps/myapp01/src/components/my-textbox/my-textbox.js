import React , {Component} from 'react';

class  MyTextBox extends Component{
    // 3 steps:
    // 1. defined the function
    // 2. bind with global object
    // 3. use it
    
    constructor(){
        super();
        this.state = {liked: false};
        // built in ".bind" allows to reference the pointer to next object and not the global object
        this.handleClick = this.handleClick.bind(this) ;
    }

    handleClick() {
        //built in object from react which stores all the ref (to access this.ref.refname)
        // similar to id element in html. Just like html id it should be unique by definitionaint
        this.refs.myTextInput.focus();
    }

    render() {
        return (
            <div>
                <input type="date" ref="myTextInput" /> <br/><br/>
                <input type="button" value="Bring back focus"
                       onClick={this.handleClick} />
            </div>
        );
    }
}

export default MyTextBox ;