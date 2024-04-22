import {Link} from 'react-router-dom';
import {FiHome} from "react-icons/fi"

export default function Menu(){
return( 
      <div className='forehead'>
        
        <h1 className='paps'>Papelaria do futuro</h1>
        
        <nav>
           <Link to="/dashboard" className='link'><FiHome className='icons-menu' size={24}/></Link> 
        </nav>
    
      </div>


)



}