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
        e.preventDefault()
        if(!email || !senha){ alert("Ta vazio buxa")

        }
        else{
         const banco = JSON.parse(localStorage.getItem("usuarios") || "[]");
         const usuariologado=banco.filter(linha=>{
            return linha.email===email  && linha.senha==senha


         })
         if(usuariologado.length>0){
        navigate('/dashboard')
      }
      else( alert("Credenciais nao correspondentes"))
      }
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
        
        
        <hr></hr>
       </form>
   </section>
    </div>
 )   
}