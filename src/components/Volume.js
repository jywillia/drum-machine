// import react dependency
import React from 'react';
import { connect } from 'react-redux';

// import action creators for mapDispatchToProps
import { adjustVolume } from '../redux/actions';

// import action types for conditional rendering
// import { PREVIEWER_VIEW } from '../redux/actionTypes';

// import css style rules
import '../App.scss';

// app's presentational component
class Volume extends React.Component {
    constructor( props ) {
        super( props );        

        // bind this to function
        this.changeHandler = this.changeHandler.bind( this );
        // this.expandPreviewer = this.expandPreviewer.bind( this );
        // this.defaultPreviewer = this.defaultPreviewer.bind( this );
    }    

    // onChange handler to set the volume for the drum machine
    changeHandler( event ) {
        this.props.adjustVolume( event );
        const audioElement = document.getElementsByTagName('audio');
        for ( let i = 0; i < audioElement.length; i++ ) {
            audioElement[i].volume = event.target.value;
        }
    }

    render() {
        return(
            <div id="volume">                
                <label className="volume-label">Volume: {Math.round(this.props.volume * 100)}</label>
                <input type="range" id="vol" name="vol" min="0" max="1" step="0.01" defaultValue="1" onChange={this.changeHandler}></input>
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
        adjustVolume: ( event ) => dispatch( adjustVolume( event ) )
    }
}

// export component as default with connected state and dispatch - can rename component when imported
export default connect( mapStateToProps, mapDispatchToProps )(Volume)