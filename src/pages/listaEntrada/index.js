import React,{useState,useEffect} from "react";
import '../../global.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Head from "../componentes/head";
import Menu from "../componentes/menu";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit,FiSearch,FiTrash } from "react-icons/fi";
import BarraPrincipal from "../componentes/barraPrincipal";

export default function Listaentrada(){
const navigate = useNavigate();

    const [entradas,setEntradas] = useState([])
    const [quantidade,setQuantidade] = useState("")

function mostrarentradas(){
    const banco = JSON.parse(localStorage.getItem("entradas")|| "[]")
    setQuantidade(banco.length)
    setEntradas(banco);

}

function mostrarproduto(id){
  let produto = JSON.parse(localStorage.getItem("produtos")|| "[]")
 const nome = produto.filter(linha=>{
  return linha.id===id
  })
  return nome[0].descricao;
}

 const buscarproduto=(id)=>{
    const banco = JSON.parse(localStorage.getItem("entradas")|| "[]")
    const produto = banco.filter(linha=> linha.id === id);
    if(produto.length ===0){
        return "Produto não encontrado";
    }
    return produto[0].descricao;
 }

function editarentrada(id){
 alert(`Estou editando uma entrada de id:${id}`)
 navigate(`/editarentrada/${id}`)
}

  const  excluirentrada = (id) => {
        confirmAlert({
          title: 'Excluir entrada',
          message: 'Deseja realmente excluir essa entrada?',
          buttons: [
            {
              label: 'Sim',
              onClick: () => {
                const banco = JSON.parse(localStorage.getItem("entradas")|| "[]")
                const dadosvelhos = banco.filter(linha=>
                  {
                      return linha.id!=id
                  }
                  )
                  localStorage.setItem("entradas",JSON.stringify(dadosvelhos))
                  mostrarentradas();
              }
            },
            {
              label: 'Não',
              onClick: () => alert('Ação cancelada!')
            }
          ]
        });
      };

      function currencyFormat(num) {
        let REAL = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
      });
      return REAL.format(num)
      }

useEffect(()=>{
    mostrarentradas()
},[])
    return(
<div className="dashboard-container">

  <BarraPrincipal />
  <div className="home-menu">
        <div className="menu">
            <Menu />
        </div>
        <div className="main">
            <Head title="Lista de entradas" />
            <div>

         <Link to="/cadastroentrada" className='btn-novo'>
          Novo
          
          </Link>
            </div>
           <table>
            <tr>
             <th>ID</th>
             <th>ID Produto</th>
             <th>Valor Unitario</th>
             <th>Quantidade</th>
             <th>Total</th>
             <th>Data da entrada</th>
            </tr>
            
                {
                  entradas.map((linha)=>{
                     return(
                        <tr key={linha.toString()}>
                        <td>{linha.id}</td>
                        <td>{mostrarproduto(linha.id_produto)}</td>
                        <td>{currencyFormat(linha.valor_unitario)}</td>
                        <td>{linha.quantidade}</td>
                        <td>{currencyFormat(linha.valor_unitario*linha.quantidade)}</td>
                        <td>{linha.data_entrada}</td>
                        <td>
                            <FiEdit size={24} color="blue" cursor="pointer" onClick={(e)=>{editarentrada(linha.id)}} />
                        </td>
                        <td>
                            <FiTrash size={24} color="red" cursor="pointer" onClick={(e)=>{excluirentrada(linha.id)}}/>
                        </td>
                        <td>
                            <FiSearch size={24} color="red" cursor="pointer" onClick={(e)=>{buscarproduto(linha.id)}}/>
                        </td>
                        </tr>
                     )
                  })  
                }
     
             <tr>
              <th colSpan={5}>Total de Registros:{quantidade}</th>
   
             </tr>
           </table>
        </div>
        </div>
</div>
    )
}