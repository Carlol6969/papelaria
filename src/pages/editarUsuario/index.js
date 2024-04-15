import { useState } from "react"
import Menu from "../componentes/menu"
import Head from  "../componentes/head"
import '../../global.css'
import {useNavigate,useParams, Link} from "react-router-dom"
export default function Editarusuario(){
    
    const navigate = useNavigate();
    const {id} = useParams;
    const[nome,setNome] = useState("")
    const[email,setEmail] = useState("")
    const[senha,setSenha] = useState()
    // json
  const usuario={
    id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
     nome,
     email,
     senha
  };
   const Salvardados =(e)=>{
    e.preventDefault();
    const banco = JSON.parse(localStorage.getItem("usuarios") || "[]");
    banco.push(usuario);
    localStorage.setItem("usuarios",JSON.stringify(banco));
    // window.location.reload();
    alert("deu certo!!!")
    navigate("/listausuarios")
      }


    return(
        <div className="dashboard-container"> 
               <div className="menu">
                <Menu/>
               </div>
               <div className="main">
                <Head title="Editar usuario"/>

                <form onSubmit={Salvardados}>
                    <input type="text" placeholder="Nome" value={nome} onChange={(e)=>setNome(e.target.value)}/>
                    <input type="email" placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="senha" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
                    <button className="btn-salvar">salvar</button>
                </form>
               </div>
       
        </div>
       
           )
}