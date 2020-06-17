// import action creators
import { DRUM_HIT, ADJUST_VOLUME, TOGGLE_BANK, TOGGLE_POWER, TOGGLE_ACTIVE } from "../actionTypes.js";

// import initial state for drums on first load
import { initialDrums } from './initialDrums.js';

// constant for initial state
const initialState = {
    power: true,
    display: "",
    volume: 1,
    banks: 0,
    active: null,
    drums: initialDrums[0]   
};

// drum machine component reducer 
export default ( state = initialState, action ) => {
    switch ( action.type ) {
        // user toggled power switch
        case TOGGLE_POWER: {
            return ({
                power: action.power,
                display: "",
                volume: state.volume,
                banks: state.banks,
                active: state.active,
                drums: state.drums
            })
        }
        // update user input aka drum hit to state
        case DRUM_HIT: {
            return ({
                power: state.power,
                display: action.name,
                volume: state.volume,
                banks: state.banks,
                active: state.active,
                drums: state.drums
            });
        }

        // update the volume set by the user
        case ADJUST_VOLUME: {
            return ({
                power: state.power,
                display: state.display,
                volume: action.volume,
                banks: state.banks,
                active: state.active,
                drums: state.drums
            });
        }

        // update the drum kit set by the user
        case TOGGLE_BANK: {
            return ({
                power: state.power,
                display: state.display,
                volume: state.volume,
                banks: action.banks,
                active: state.active,
                drums: initialDrums[action.banks]
            });
        }

        // update active button for button animations
        case TOGGLE_ACTIVE: {
            return ({
                power: state.power,
                display: state.display,
                volume: state.volume,
                banks: state.banks,
                active: action.active,
                drums: state.drums
            });
        }

        // default no action return current state
        default:
            return state;
    }
}