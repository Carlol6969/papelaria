import { useEffect, useState } from "react"
import Menu from "../componentes/menu"
import Head from  "../componentes/head"
import '../../global.css'
import {useNavigate, Link,useParams} from "react-router-dom"
export default function Editarusuario(){
    //salvar os usuarios cadastrados
    const navigate = useNavigate();
    const {id} = useParams();
    const[nome,setNome] = useState("")
    const[email,setEmail] = useState("")
    const[senha,setSenha] = useState()
    const [usuarios,setUsuarios] = useState([]);
    // json
  const usuario={
    id: id,
     nome,
     email,
     senha
  };
  useEffect(()=>{
   exibirdados() 
  },[]) 
  //pegar todos os dados dos usuarios e colocar na tela
  const exibirdados=()=>{
    const banco = JSON.parse(localStorage.getItem("usuarios") || "[]");
    // const dadosnovos = banco.filter((linha) => linha.id === Number(id));
     banco.filter(linha => {
      return linha.id===id
    }).map( value=>{
      setNome(value.nome) 
      setEmail(value.email)
      setSenha(value.senha)
      usuarios.push(value)
   
    }
    )
 
  }
   const Salvardados =(e)=>{
    e.preventDefault();
    const banco = JSON.parse(localStorage.getItem("usuarios") || "[]");
    // const dadosvelhos = banco.filter(linha  => {linha.id!= id});
    const dadosvelhos = banco.filter( (linha) => linha.id !== id ); 
    // let novoArray=[...dadosvelhos,usuario];
    // localStorage.setItem('usuarios',JSON.stringify(novoArray))
    // alert ("Dados salvos com sucesso!")
    dadosvelhos.push(usuario);
    localStorage.setItem("usuarios",JSON.stringify(dadosvelhos));
 
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
                <Head title="editar usuario"/>

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