// import react dependency
import React from 'react';
import { connect } from 'react-redux';

// import css style rules
import '../App.scss';

// app's presentational component
class Display extends React.Component {
    /* useless constructor
    constructor( props ) {
        super( props );           
    }    */

    render() {
        return(
            <div id="display">
                <p>{this.props.display}</p>
            </div>
        );
    }
}

// convert state from store to props to pass to components 
const mapStateToProps = state => {
    const content = Object.assign( {}, state );
    return content;
};

// export component as default with connected state - can rename component when imported
export default connect( mapStateToProps, null )(Display)