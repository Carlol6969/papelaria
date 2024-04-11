import {Link} from 'react-router-dom'
import{FiHome,FiUser,FiTag,FiTruck,FiShoppingCart,FiGrid} from 'react-icons/fi';
export default function menu(){
    return(
        <div>
            <nav>
                <h1> Menu</h1>
                <Link to="/dasboard" className='link'>
                    <FiHome className='icons-menu' size={15}/> Home

                </Link>
                <Link to="/listausuario" className='link'>
                    <FiUser className='icons-menu' size={15}/> Usuário

                </Link>
                <Link to="/listaproduto" className='link'>
                    <FiTag className='icons-menu' size={15}/> Produto

                </Link>
                <Link to="/listaentrada" className='link'>
                    <FiShoppingCart className='icons-menu' size={15}/> Entrada

                </Link>
                <Link to="/listaestoque" className='link'>
                    <FiGrid className='icons-menu' size={15}/> Estoque

                </Link>
                <Link to="/listasaida" className='link'>
                    <FiTruck className='icons-menu' size={18}/> Saída

                </Link>
               
            </nav>
        </div>

    )
}