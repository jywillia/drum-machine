// import react dependency
import React from 'react';
import { connect } from 'react-redux';

// import action creators for mapDispatchToProps
// import { playDrumSound } from '../redux/actions';

// import action types for conditional rendering
// import { PREVIEWER_VIEW } from '../redux/actionTypes';

// import css style rules
import '../App.scss';

// app's presentational component
class DrumPad extends React.Component {
    constructor( props ) {
        super( props );

        // bind this to function     
        this.clickHandler = this.clickHandler.bind( this );        
    }
    
    // onClick listener handles when user clicks drum pad
    clickHandler() {
        this.props.onClickHandler( this.props.hit.key );
    }        

    render() {
        if ( this.props.active === this.props.hit.key ) {
            return(
                <div className="drum-pad is-active" id={this.props.hit.name} onClick={this.clickHandler}>
                {/* <div className="drum-pad btn btn-primary btn-sm rounded-0 col-sm-3" id={this.props.hit.name} onClick={this.clickHandler}> */}
                    <audio className="clip" src={process.env.PUBLIC_URL + "/sounds/" + this.props.hit.name + ".mp3"} type="audio/mpeg" id={this.props.hit.key}>
                        Your browser does not support the <code>audio</code> element.
                    </audio>
                    <p id="inner-text">{this.props.hit.key}</p>
                </div>
            );            
        } else {
            return(
                <div className="drum-pad" id={this.props.hit.name} onClick={this.clickHandler}>
                {/* <div className="drum-pad btn btn-primary btn-sm rounded-0 col-sm-3" id={this.props.hit.name} onClick={this.clickHandler}> */}
                    <audio className="clip" src={process.env.PUBLIC_URL + "/sounds/" + this.props.hit.name + ".mp3"} type="audio/mpeg" id={this.props.hit.key}>
                        Your browser does not support the <code>audio</code> element.
                    </audio>
                    <p id="inner-text">{this.props.hit.key}</p>
                </div>
            );
        }        
    }
}

// convert state from store to props to pass to components 
const mapStateToProps = state => {
    const content = Object.assign( {}, state );
    return content;
};

// export component as default with connected state and dispatch - can rename component when imported
export default connect( mapStateToProps, null )(DrumPad)