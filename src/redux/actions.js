// import action type constants
import { DRUM_HIT, ADJUST_VOLUME, TOGGLE_BANK, TOGGLE_POWER, TOGGLE_ACTIVE } from "./actionTypes.js";

// play drum pad sound
export const playDrumSound = ( name ) => ({
    type: DRUM_HIT,
    name    
})

// user adjusted the drum machine's volume
export const adjustVolume = ( event ) => ({
    type: ADJUST_VOLUME,
    volume: event.target.value
})

// user changed drum kit bank
export const toggleBank = ( currentBank ) => ({
    type: TOGGLE_BANK,
    banks: currentBank ? 0 : 1
})

// user toggled the power switch
export const togglePower = ( currentPower ) => ({
    type: TOGGLE_POWER,
    power: currentPower ? 0 : 1
})

// user activated button to show keypress and clicking drumpads
export const toggleActive = ( currentActive, currentValue ) => ({
    type: TOGGLE_ACTIVE,
    active: currentActive === null ? currentValue : null
})