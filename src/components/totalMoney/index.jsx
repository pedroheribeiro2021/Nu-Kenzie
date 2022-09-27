import './index.css'

export const TotalMoney = ({listTransactions }) => {
    return (
        <div className='totalMoney'>
            <h2>Valor total:</h2>
            <span>O valor se refere ao saldo</span>
                <p>
                    {
                    'R$ ' + listTransactions.reduce((acc, current) => acc + current.value , 0)
                    }
                </p>
        </div>
    )
}