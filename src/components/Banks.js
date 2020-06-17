// import react dependency
import React from 'react';
import { connect } from 'react-redux';

// import action creators for mapDispatchToProps
import { toggleBank } from '../redux/actions';

// import action types for conditional rendering
// import { PREVIEWER_VIEW } from '../redux/actionTypes';

// import css style rules
import '../App.scss';

// component to toggle drum kits
class Banks extends React.Component {
    constructor( props ) {
        super( props );        

        // bind this to function
        this.bankHandler = this.bankHandler.bind( this );
    }

    // change handler for when user wants to change drum kits
    bankHandler() {
        this.props.toggleBank( this.props.banks );
    }

    render() {
        return(
            <div id="banks">
                <p id="banks-label">Banks: {this.props.banks}</p>
                <label className="switch" id="bank-switch">
                    <input type="checkbox" defaultValue="0" onChange={this.bankHandler}></input>
                    <span className="slider round" id="bank-slider"></span>
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
        toggleBank: ( currentBank ) => dispatch( toggleBank( currentBank ) )
    }
}

// export component as default with connected state and dispatch - can rename component when imported
export default connect( mapStateToProps, mapDispatchToProps )(Banks)