import { useEffect, useState } from "react"
import Menu from "../componentes/menu"
import Head from  "../componentes/head"
import Header from "../componentes/header"
import '../../global.css'
import {useNavigate, Link} from "react-router-dom"
export default function Cadastroentrada(){
    const navigate = useNavigate();
    const[idproduto,setIdproduto] = useState("")
    const[valorunit,setValorunit] = useState("")
    const[quantidade,setQuantidade] = useState("")
    const[data,setData] = useState("")
    const [produtos,setProdutos] = useState([])
    // json
  const saida={
    id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
     idproduto,
     valorunit,
     quantidade,
     data,
  };
   const Salvardados =(e)=>{
    e.preventDefault();
    const banco = JSON.parse(localStorage.getItem("saida") || "[]");
    banco.push(saida);
    localStorage.setItem("saida",JSON.stringify(banco));
    alert("deu certo!!!")
  
    navigate("/listasaida")
      }
      useEffect(()=>{
        mostrarprodutos();
      },[])
      function mostrarprodutos(){
      
        const banco = JSON.parse(localStorage.getItem("produtos") || "[]");
        setProdutos (banco);
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
                  <Head title="Cadastro de Saída"/>
                  <form onSubmit={Salvardados}>
                      
                      <select onChange={(e)=>setIdproduto(e.target.value)}>
                        <option>Selecione um produto</option>
                        {
                                produtos.map((linha) => {

                                    return(
                                        <option value={linha.id}>{linha.descricao}</option>
                                            )
                                            })
                                }

                      </select>
                      <input type="text" placeholder="Valor Unitário" value={valorunit} onChange={(e)=>setValorunit(e.target.value)}/>
                      <input type="number" placeholder="Quantidade" value={quantidade} onChange={(e)=>setQuantidade(e.target.value)}/>
                      <input type="date" placeholder="Data" value={data} onChange={(e)=>setData(e.target.value)}/>
                      <button className="btn-salvar">salvar</button>
                  </form>
                 </div>
               </div>
       
        </div>
       
           )
}