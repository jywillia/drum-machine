// import react-redux dependancies
import React from "react";
import { connect } from 'react-redux';

// import action creators for mapDispatchToProps
import { playDrumSound, toggleActive } from '../redux/actions';

// import child components for presentation
import DrumPadRow from "./DrumPadRow";

// import css style rules
import '../App.scss';
// import { $CombinedState } from "redux";

// dynamically create array of 9 drum pads
class DrumPadArray extends React.Component {
    constructor( props ) {
        super( props );

        // bind this to function
        this.playDrumPad = this.playDrumPad.bind( this );  // plays the corresponding drum sound on click or keypress        
        this.keyPressHandler = this.keyPressHandler.bind( this );  // keypress handler for keyboard input
    }
    
    // handle click and keypress on drumpads
    playDrumPad( key ) {
        // get drum pads by reference for binding        
        const qPad = document.getElementById( this.props.drums[0].key );
        const wPad = document.getElementById( this.props.drums[1].key );
        const ePad = document.getElementById( this.props.drums[2].key );
        const aPad = document.getElementById( this.props.drums[3].key );
        const sPad = document.getElementById( this.props.drums[4].key );
        const dPad = document.getElementById( this.props.drums[5].key );
        const zPad = document.getElementById( this.props.drums[6].key );
        const xPad = document.getElementById( this.props.drums[7].key );
        const cPad = document.getElementById( this.props.drums[8].key );

        // only play if powered on
        if ( this.props.power ) {
            switch( key ) {
                case this.props.drums[0].key:
                    this.props.toggleActive( this.props.active, key );
                    this.props.playDrumSound( this.props.drums[0].display );
                    qPad.load();
                    qPad.play();
                    setTimeout( () => {
                        this.props.toggleActive( this.props.active, key );
                    }, 100 );
                break;

                case this.props.drums[1].key:
                    this.props.toggleActive( this.props.active, key );
                    this.props.playDrumSound( this.props.drums[1].display );
                    wPad.load();
                    wPad.play();
                    setTimeout( () => {
                        this.props.toggleActive( this.props.active, key );
                    }, 100 );
                break;

                case this.props.drums[2].key:
                    this.props.toggleActive( this.props.active, key );
                    this.props.playDrumSound( this.props.drums[2].display );
                    ePad.load();
                    ePad.play();
                    setTimeout( () => {
                        this.props.toggleActive( this.props.active, key );
                    }, 100 );
                break;
                
                case this.props.drums[3].key:
                    this.props.toggleActive( this.props.active, key );
                    this.props.playDrumSound( this.props.drums[3].display );
                    aPad.load();
                    aPad.play();
                    setTimeout( () => {
                        this.props.toggleActive( this.props.active, key );
                    }, 100 );
                break;
                
                case this.props.drums[4].key:
                    this.props.toggleActive( this.props.active, key );
                    this.props.playDrumSound( this.props.drums[4].display );
                    sPad.load();
                    sPad.play();
                    setTimeout( () => {
                        this.props.toggleActive( this.props.active, key );
                    }, 100 );
                break;
                
                case this.props.drums[5].key:
                    this.props.toggleActive( this.props.active, key );
                    this.props.playDrumSound( this.props.drums[5].display );
                    dPad.load();
                    dPad.play();
                    setTimeout( () => {
                        this.props.toggleActive( this.props.active, key );
                    }, 100 );
                break;
                
                case this.props.drums[6].key:
                    this.props.toggleActive( this.props.active, key );
                    this.props.playDrumSound( this.props.drums[6].display );
                    zPad.load();
                    zPad.play();
                    setTimeout( () => {
                        this.props.toggleActive( this.props.active, key );
                    }, 100 );
                break;
                
                case this.props.drums[7].key:
                    this.props.toggleActive( this.props.active, key );
                    this.props.playDrumSound( this.props.drums[7].display );
                    xPad.load();
                    xPad.play();
                    setTimeout( () => {
                        this.props.toggleActive( this.props.active, key );
                    }, 100 );
                break;
                
                case this.props.drums[8].key:
                    this.props.toggleActive( this.props.active, key );
                    this.props.playDrumSound( this.props.drums[8].display );
                    cPad.load();
                    cPad.play();
                    setTimeout( () => {
                        this.props.toggleActive( this.props.active, key );
                    }, 100 );
                break;
                
                default:
                break;
            }
        }
    }    

    // onKeyPress listener handles when user wants to play sound with keyboard
    keyPressHandler( event ) {
        this.playDrumPad( event.key );
    } 

    componentDidMount() {
        document.addEventListener( "keydown", this.keyPressHandler );
    }

    render() { 
        let splitDrums = [ this.props.drums.slice( 0, 3 ), this.props.drums.slice( 3, 6 ), this.props.drums.slice( 6, 9 ) ];
        return (
            <div id="drum-pad-array"> {/* container div to wrap child component */}
            {/* <div id="drum-pad-array" className="container-md">  container div to wrap child component */}
                {splitDrums.map( ( someDrums, index ) => {
                    return <DrumPadRow key={index} myDrums={someDrums} onClickHandler={this.playDrumPad} />;
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

// connect dispatch to appropriate listener
const mapDispatchToProps = dispatch => {
    return {        
        playDrumSound: ( text ) => dispatch( playDrumSound( text ) ),
        toggleActive: ( activeButton, value ) => dispatch( toggleActive( activeButton, value ) )
    }
}

// export component as default with connected state and dispatch - can rename component when imported
export default connect( mapStateToProps, mapDispatchToProps )(DrumPadArray)