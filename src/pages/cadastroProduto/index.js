import { useState } from "react"
import Menu from "../componentes/menu"
import Head from  "../componentes/head"
import Header from "../componentes/header"
import '../../global.css'
import {useNavigate, Link} from "react-router-dom"
export default function Cadastroproduto(){
    const navigate = useNavigate();
    const[descricao,setDescricao] = useState("")
    const[status,setStatus] = useState("")
    const[valorunit,setValorunit] = useState("")
    const[estoqmin,setEstoqmin] = useState()
    const[estoqmax,setEstoqmax] = useState()
    // json
  const produto={
    id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
     status,
     descricao,
     valorunit,
     estoqmin,
     estoqmax
  };
   const Salvardados =(e)=>{
    e.preventDefault();
    const banco = JSON.parse(localStorage.getItem("produtos") || "[]");
    banco.push(produto);
    localStorage.setItem("produtos",JSON.stringify(banco));
    alert("deu certo!!!")
  
    navigate("/listaprodutos")
      }


    return(
        <div className="dashboard-container"> 
              <div className="header">
                <Header/>
              </div>
               <div className="uphead">
                 <div className="menu">
                  <Menu/>
                 </div>
                 <div className="main">
                  <Head title="Cadastro de Produto"/>
                  <form onSubmit={Salvardados}>
                      <input type="text" placeholder="Status" value={status} onChange={(e)=>setStatus(e.target.value)}/>
                      <input type="text" placeholder="Descrição" value={descricao} onChange={(e)=>setDescricao(e.target.value)}/>
                      <input type="text" placeholder="Valor Unitário" value={valorunit} onChange={(e)=>setValorunit(e.target.value)}/>
                      <input type="number" placeholder="Estoque Mínimo" value={estoqmin} onChange={(e)=>setEstoqmin(e.target.value)}/>
                      <input type="number" placeholder="Estoque Máximo" value={estoqmax} onChange={(e)=>setEstoqmax(e.target.value)}/>
                      <button className="btn-salvar">salvar</button>
                  </form>
                 </div>
               </div>
       
        </div>
       
           )
}