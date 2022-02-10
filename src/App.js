import './App.css';
import { Header, Balance, IncomeExpense, NewTransaction, TransactionList } from './components'

import GlobalProvider from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <NewTransaction />
      </div>
    </GlobalProvider>

  );
}

export default App;
