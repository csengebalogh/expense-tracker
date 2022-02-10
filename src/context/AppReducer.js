import React from 'react'

function AppReducer (props) {
    const {
        state,
        action
    } = props

    switch(action.type) {
        default:
            return state
    }
}

export default AppReducer
