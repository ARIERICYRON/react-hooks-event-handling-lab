// Code EyesOnMe Component Here
import React from "react"

function EyesOnMe() {
    function manageFocus() {
        console.log("Good!")
    }
    function manageBlur() {
        console.log("Hey! Eyes on me!")
    }
    return (
        <button onFocus={manageFocus} onBlur={manageBlur}>
            Eyes on me
        </button>
    )
}




export default EyesOnMe