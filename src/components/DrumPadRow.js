// import react-redux dependancies
import React from "react";
import { connect } from 'react-redux';

// import child components for presentation
import DrumPad from "./DrumPad";

// import css style rules
import '../App.scss';

// dynamically create array of 9 drum pads
class DrumPadRow extends React.Component {
    constructor( props ) {
        super( props );

        // bind this to function
        this.clickHandler = this.clickHandler.bind( this );        
    }
    
    // onClick listener handles when user clicks drum pad
    clickHandler( value ) {
        this.props.onClickHandler( value );
    }

    render() { 
        return (
            <div id="drum-pad-row"> {/* container div to wrap child component */}
            {/* <div id="drum-pad-row" className="row">  container div to wrap child component */}
                {this.props.myDrums.map( ( hit ) => {
                    return <DrumPad key={hit.key} hit={hit} onClickHandler={this.clickHandler} />;
                } ) }
            </div>                
        );        
    }
}

// convert state from store to props to pass to components 
const mapStateToProps = state => {
    const content = Object.assign( {}, state );
    return content;
};

// export component as default with connected state and dispatch - can rename component when imported
export default connect( mapStateToProps, null )(DrumPadRow)