import './index.css'
import { Card } from "../card"

export const List = ({ listTransactions, setListTransactions, setFilter }) => {

    return (
        <div className='trasactions'>
            <div className='filter'>
                <h2>Resumo financeiro</h2>
                <button onClick={() => setFilter('')} className="btn1">Todos</button>
                <button onClick={(event) => setFilter(event.target.value)} value='Entrada' className="btn2">Entradas</button>
                <button onClick={(event) => setFilter(event.target.value)} value='Saída' className="btn2">Despesas</button>
            </div>
            {
                listTransactions.length ? (
                    <ul>
                    {
                        listTransactions &&
                        listTransactions.map((element, i) => {
                            return <Card setListTransactions={setListTransactions} listTransactions={listTransactions} transaction={element}  key={i} id={i}/>
                        })
                    }
                </ul>
                ) : (
                    <h1>Você ainda não possui nenhum lançamento.</h1>
                )
            }
        </div>
    )
}