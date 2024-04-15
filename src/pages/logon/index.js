import { useState } from "react"
import React from "react";
import '../../global.css'
import Logo from '../../assets/img/papelaria.png'
import {useNavigate} from 'react-router-dom'

export default function Logon(){
   const[email,setEmail] = useState()
   const[senha,setSenha] = useState()

   const navigate = useNavigate();
   const logar=(e)=>{
        e.preventDefault()  //impede que a página se recarregue quando o botão for  clicado
      //   alert("deu?")     //apresenta uma mensagem de teste, pode ser removida em produção
        navigate('/dashboard')//redirecion a para a home após o login 
        
   }
  

 return(
    <div className="logon-container"> 
   <section className="form">
    <img src={Logo} width={350}/>
    <h1 className="ajuste-fonte">Papelaria</h1>
       <form onSubmit={logar}>
        <input 
        placeholder="E-mail"
        type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input 
        placeholder="Senha"
        type="password" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
        <button className="button-logon" type="submit">Entrar</button>
        {email}
        {senha}
        <hr></hr>
       </form>
   </section>
    </div>
 )   
}