import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


function IncomeExpense () {

    const { transactions } = useContext(GlobalContext)

    let incomeSum = 0

    let expenseSum = 0

    transactions.map(transaction => (
      transaction.amount > 0 ? incomeSum += transaction.amount : expenseSum += Math.abs(transaction.amount)
    ))

    return(
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${incomeSum}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expenseSum}</p>
        </div>
      </div>
    )
}

export default IncomeExpense
