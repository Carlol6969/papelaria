import { useEffect, useState } from "react"
import Menu from "../componentes/menu"
import Head from  "../componentes/head"
import Header from "../componentes/header"
import '../../global.css'
import {useNavigate, Link,useParams} from "react-router-dom"
export default function Editarproduto(){
    //salvar os usuarios cadastrados
    const navigate = useNavigate();
    const {id} = useParams();
    const[status,setStatus] = useState("")
    const[descricao,setDescricao] = useState("")
    const[valorunit,setValorunit] = useState()
    const[estoqmin,setEstoqmin] = useState()
    const[estoqmax,setEstoqmax] = useState()
    const [produtos,setProdutos] = useState([]);
    // json
  const produto={
    id: id,
     status,
     descricao,
     valorunit,
     estoqmin,
     estoqmax
  };
  useEffect(()=>{
   exibirdados() 
  },[]) 
  //pegar todos os dados dos usuarios e colocar na tela
  const exibirdados=()=>{
    const banco = JSON.parse(localStorage.getItem("produtos") || "[]");
    // const dadosnovos = banco.filter((linha) => linha.id === Number(id));
     banco.filter(linha => {
      return linha.id===id
    }).map( value=>{
      setStatus(value.status) 
      setDescricao(value.descricao)
      setValorunit(value.valorunit)
      setEstoqmin(value.estoqmin)
      setEstoqmax(value.estoqmax)
      produtos.push(value)
   
    }
    )
 
  }
   const Salvardados =(e)=>{
    e.preventDefault();
    const banco = JSON.parse(localStorage.getItem("produtos") || "[]");
    // const dadosvelhos = banco.filter(linha  => {linha.id!= id});
    const dadosvelhos = banco.filter( (linha) => linha.id !== id ); 
    // let novoArray=[...dadosvelhos,usuario];
    // localStorage.setItem('usuarios',JSON.stringify(novoArray))
    // alert ("Dados salvos com sucesso!")
    dadosvelhos.push(produto);
    localStorage.setItem("produtos",JSON.stringify(dadosvelhos));
 
    // window.location.reload();
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
                  <Head title="Editar Produto"/>
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