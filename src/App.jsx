import { useState } from 'react';
import './button.css'
import './App.css';
import './reset.css';
import './globalStyles.css'
import { Form } from './components/form';
import { Header } from './components/header';
import { List } from './components/list';
import { TotalMoney } from './components/totalMoney';
// landing page:
import illustration from './assets/illustration.png'
import logo from './assets/NuKenzieBlack.png'
import './landingPage.css'

const App = () => {

const [listTransactions, setListTransactions] = useState([])

const [filter, setFilter] = useState('')

const newTransactionsList = listTransactions.filter((elem) => 
filter === '' ? true : elem.type === filter)

const [isLoggedIn, setIsLoggedIn] = useState(false)

const logIn = () => setIsLoggedIn(true)
const logOut = () => setIsLoggedIn(false)
         
  return (
    <div className="App">
    {
      isLoggedIn ? (
        <>
        <Header logOut={logOut} />
        <section>
        <div>
          <Form 
          listTransactions={listTransactions} 
          setListTransactions={setListTransactions} 
          />
          <TotalMoney 
          listTransactions={listTransactions}
          />
        </div>
        <div>
          <List 
          listTransactions={newTransactionsList}
          setListTransactions={setListTransactions}
          setFilter={setFilter}
          />
        </div>
        </section>
        </>
      ) : (
        <main className='landingPage'>
        <div>
          <img className='logo' src={logo} alt="" />
          <h1>Centralize o controle das suas finanças!</h1>
          <span>de forma rápida e segura</span>
          <button onClick={logIn} className='btn1'>Iniciar</button>
        </div>
        <figure>
          <img className='illustration' src={illustration} alt="" />
        </figure>
      </main>
      )
    }
    </div>
  )
}

export default App;
