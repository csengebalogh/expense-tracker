function AppReducer ( state, action ) {

    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(
                    transaction => transaction.id !== action.payload
                )
            }
        case 'ADD_TRANSACTION':
            return {

                // spread operator: takes out all the values from the array, puts them here to access

                // action.payload = new transaction that's being added

                ...state,
                transactions: [action.payload,...state.transactions]
            }
        default:
            return state
    }
}

export default AppReducer
