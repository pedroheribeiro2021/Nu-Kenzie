import './index.css';
import logo from '../../assets/Nu Kenzie.png'

 export const Header = ({logOut}) => {
    return (
        <header>
            <img src={logo} alt="" className='logo'/>
            <button onClick={logOut} className='btn2'>Inicio</button>
        </header>
    )
}