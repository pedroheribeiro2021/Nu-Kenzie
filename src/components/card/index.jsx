import './index.css'
import trash from '../../assets/trash.png'

export const Card = ({ setListTransactions, listTransactions, transaction, id}) => {
    
    const handleDelete = () => {
        const filtered = listTransactions.filter((elem, i) => i !== id)
        setListTransactions(filtered)
    }

    if(transaction.type === 'Entrada'){
        return (
            <li className='card' id={id}>
                <div className='statusEntrada'></div>
                <h2> {transaction.description} </h2>
                <span> {`R$ ${transaction.value}`} </span>
                <img className='trash' onClick={() => handleDelete()} src={trash} alt="" />
                <div>
                    <span className='cardType'> {transaction.type} </span>
                </div>
        </li>
        )
    } 

    if(transaction.type === 'Saída'){
        return (
            <li className='card' id={id}>
                <div className='statusSaida'></div>
                <h2> {transaction.description} </h2>
                <span> {`R$ ${transaction.value}`} </span>
                <img className='trash' onClick={() => handleDelete()} src={trash} alt="" />
                <div>
                    <span className='cardType'> {transaction.type} </span>
                </div>
        </li>
        )
    }
}