import React, {Component} from 'react';

import Planet from './planet';
import PropTypes from "prop-types";

class SolarSystem extends Component {
    render() {
        return (
            <div>
                <p>Solar System: {this.context.mydata} </p>
                <div className="solar">
                    <Planet
                        color="darkcyan"
                        diameter={150}
                        name="Jupiter"
                    />
                    <Planet
                        color="lightgreen"
                        diameter={60}
                        name="Earth"
                    />
                    <Planet
                        color="darkgreen"
                        diameter={40}
                        name="Moon"
                    />
                </div>
            </div>
        );
    }
}

SolarSystem.contextTypes = {
    planetClickHandler: PropTypes.func,
    mydata: PropTypes.string
};
export default SolarSystem;