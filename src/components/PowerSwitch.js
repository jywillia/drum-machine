// import react dependency
import React from 'react';
import { connect } from 'react-redux';

// import action creators for mapDispatchToProps
import { togglePower } from '../redux/actions';

// import action types for conditional rendering
// import { PREVIEWER_VIEW } from '../redux/actionTypes';

// import css style rules
import '../App.scss';

// app's presentational component
class PowerSwitch extends React.Component {
    constructor( props ) {
        super( props );       

        // bind this to function
        this.powerHandler = this.powerHandler.bind( this );
        // this.expandPreviewer = this.expandPreviewer.bind( this );
        // this.defaultPreviewer = this.defaultPreviewer.bind( this );
    }    

    // change handler for when user toggles power switch
    powerHandler() {
        this.props.togglePower( this.props.power );
    }

    render() {
        return(
            <div id="power-switch">
                <p id="power-switch-label">Power: {this.props.power ? "On" : "Off"}</p>
                <label className="switch">
                    <input type="checkbox" defaultChecked onChange={this.powerHandler}></input>
                    <span className="slider round"></span>
                </label>
            </div>
        );       
    }
}

// convert state from store to props to pass to components 
const mapStateToProps = state => {
    const content = Object.assign( {}, state );
    return content;
};

// connect dispatch to appropriate listener
const mapDispatchToProps = dispatch => {
    return {        
        togglePower: ( currentPower ) => dispatch( togglePower( currentPower ) )
    }
}

// export component as default with connected state and dispatch - can rename component when imported
export default connect( mapStateToProps, mapDispatchToProps )(PowerSwitch)