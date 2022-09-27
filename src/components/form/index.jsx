import './index.css'
import { useState } from "react"

export const Form = ({ listTransactions, setListTransactions }) => {

    const [descriptionInput, setDescriptionInput] = useState('')
    const [typeInput, setTypeInput] = useState('')
    const [valueInput, setValueInput] = useState()

    const handleInputs = () => {

        if(typeInput === 'Entrada' && valueInput > 0 && descriptionInput !== ''){
            setListTransactions([...listTransactions, {
                description: descriptionInput,
                type: typeInput,
                value: parseFloat(valueInput)
            }])
        } if(typeInput === 'Saída' && valueInput > 0 && descriptionInput !== ''){
            setListTransactions([...listTransactions, {
                description: descriptionInput,
                type: typeInput,
                value: parseFloat(valueInput) * -1
            }])
        } if(typeInput === '' || valueInput === '' || valueInput <= 0 || descriptionInput === ''){

            alert('Dados inválidos!')
        } 
        setDescriptionInput('')
        setTypeInput('')
        setValueInput('')
    }

    return (
        <form onSubmit={(event) => handleInputs(event.preventDefault())}>
            <label>Descrição</label>
            <input 
            type="text"
            placeholder=' Digite aqui sua descrição'
            value={descriptionInput}
            onChange={(event) => setDescriptionInput(event.target.value)}
            />
            <span>Ex: fatura telefônica</span>
            <div>
                <label>Valor</label>
                <input 
                type="number"
                placeholder='   R$'
                value={valueInput}
                onChange={(event) => setValueInput(event.target.value)}
                />
                <select
                onChange={(event) => setTypeInput(event.target.value)}
                value={typeInput}
                >
                    <option value="">Operaçãoes</option>
                    <option value="Entrada">Entrada</option>
                    <option value="Saída">Saída</option>
                </select>
            </div>
            <button type='submit' className='btn1'>Inserir valor</button>
        </form>
    )
}