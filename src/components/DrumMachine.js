// import react-redux dependancies
import React from "react";
import { connect } from 'react-redux';

// import action type constants
// import { EDITOR_VIEW, PREVIEWER_VIEW } from "../redux/actionTypes.js";

// import child components for presentation
import Display from "./Display";
import Banks from "./Banks";
import PowerSwitch from "./PowerSwitch";
import Volume from "./Volume";
import DrumPadArray from "./DrumPadArray";

// import css style rules
import '../App.scss';

// app's presentational component
class DrumMachine extends React.Component {
    render() {        
        return (
            <div id="drum-machine"> {/* container div to wrap child component */}
            {/* <div id="drum-machine" className="container-lg"> {/* container div to wrap child component */}
                <div id="dm-row">
                  {/*  <div id="flex-center">
                        <div id="viewport-size"> */}
                    <div id="dm-left-side">
                        <DrumPadArray /> {/* render array of drumpads to the output */}
                    </div>
                    <div id="dm-right-side">
                        <PowerSwitch />
                        <Display /> {/* render the display component to the output */}
                        <Volume />
                        <Banks />
                    </div>
                  {/*  </div>
                    </div> */}
                </div>                
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
export default connect( mapStateToProps, null )(DrumMachine)
/*
// import react dependency
import React from 'react';
import { connect } from 'react-redux';

// import action creators for mapDispatchToProps
import { playDrumSound } from '../redux/actions';

// import action types for conditional rendering
// import { PREVIEWER_VIEW } from '../redux/actionTypes';

// import css style rules
import '../App.css';

// app's presentational component
class DrumPad extends React.Component {
    constructor( props ) {
        super( props );

        // bind this to function     
        this.clickHandler = this.clickHandler.bind( this );
        this.keyPressHandler = this.keyPressHandler.bind( this );
    }
    
    // onClick listener handles when user clicks drum pad
    clickHandler() {
        const mediaElement = document.getElementById("x");
        this.props.playDrumSound();
        mediaElement.load();
        mediaElement.play();
    }

    // onKeyPress listener handles when user wants to play sound with keyboard
    keyPressHandler( event ) {        
        console.log( event.key );
        if ( event.key === 'x' ) {
            const mediaElement = document.getElementById("x");
            this.props.playDrumSound();
            mediaElement.load();
            mediaElement.play();
        }        
    } 

    componentDidMount() {
        document.addEventListener( "keydown", this.keyPressHandler );
    }

    render() {
        return(
            <div className="drum-pad btn btn-primary rounded-0" onClick={this.clickHandler}>
                <audio className="clip" src={process.env.PUBLIC_URL + "/sounds/Bass-Drum-Hit.mp3"} type="audio/mpeg" id="x">
                    Your browser does not support the <code>audio</code> element.
                </audio>
                <p id="inner-text">x</p>                
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
        playDrumSound: () => dispatch( playDrumSound() )        
    }
}

// export component as default with connected state and dispatch - can rename component when imported
export default connect( mapStateToProps, mapDispatchToProps )(DrumPad) */