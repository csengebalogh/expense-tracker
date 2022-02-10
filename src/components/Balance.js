import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


function Balance () {

    const {transactions} = useContext(GlobalContext)

    let sum = 0

    transactions.map(transaction => (
        sum += transaction.amount
    ))

    return(
        <>
            <h4>Your Balance</h4>
            <h1>${sum}</h1>
        </>
    )
}

export default Balance
