import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Link} from 'react-router-dom';
import {FiLogOut} from "react-icons/fi"
import logoicon from "../../../assets/img/papel.png"
import '../../../global.css'
import { useNavigate } from 'react-router-dom';

export default function Menu(){
  const navigate=useNavigate();
  const sair = () => {
    confirmAlert({
      title: 'kitar do server',
      message: 'Quer mermo kitar do server seu noob?',
      buttons: [
        {
          label: 'sim, quero dar ragequit',
          onClick: () => {
            navigate("/")
            
          }
        },
        {
          label: 'Nao, sou chad e nao kito',
          onClick: () => alert('Nem pense em kitar dnv seu bluepill based')
        }
      ]
    });
  };
return( 
      <div className='forehead'>
        <img className='image' src={logoicon}/>
        
        <h1 className='paps'>Papelaria do futuro</h1>
        
        <nav>
           <Link to="" className='link'><FiLogOut onClick={sair} className='icons-menu' size={24}/></Link> 
        </nav>
    
      </div>


)



}