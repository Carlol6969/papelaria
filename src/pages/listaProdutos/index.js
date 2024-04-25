import React,{useState, useEffect} from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import '../../global.css'
import Head from "../componentes/head"
import Menu from "../componentes/menu"
import Header from "../componentes/header"
import { Link, useNavigate } from "react-router-dom";
import { FiEdit,FiTrash } from "react-icons/fi";

export default function Listaprodutos(){
    const navigate =  useNavigate();

    const[produtos, setProdutos] = useState([]);
    const [quantidade,setquantidade]= useState();

    function mostrarprodutos(){
      
        const banco = JSON.parse(localStorage.getItem("produtos") || "[]");
        setquantidade(banco.length)
        setProdutos (banco);
    }
    function editarproduto(id, nome){
         alert(`estou editando  o produto id:${id} |-| do nome: ${nome}`);
         navigate(`/editarproduto/${id}`)
    }
    
       const excluirproduto = (id, nome) => {
            confirmAlert({
              title: 'ban em produto',
              message: 'quer mesmo dar ban nesse produto?',
              buttons: [
                {
                  label: 'sim, muito cringe, da ban',
                  onClick: () => {
                    const banco = JSON.parse(localStorage.getItem("produtos") || "[]");
                    const dadosvelhos = banco.filter( (linha) => linha.id !== id ); 
                    localStorage.setItem("produtos", JSON.stringify(dadosvelhos));
                    alert(`produto ${nome} excluido com sucesso`);
                    mostrarprodutos();
                    
                  }
                },
                {
                  label: 'nah, o cringe sou eu, produto based mgtow',
                  onClick: () => alert('Click No')
                }
              ]
            });
          };
        
    
    useEffect(()=>{mostrarprodutos()},[])
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
             <Head title="Lista de Produtos" />
                     <div>
                     <Link to="/cadastroproduto" className='btn-novo'>Novo</Link>
                     </div>
          
        
         <table>
            <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Descrição</th>
            <th>Valor unitário</th>
            <th>Estoque Min.</th>
            <th>Estoque Max.</th>
            <th></th>
            <th></th>
            </tr>
            
                {
                    produtos.map((linha) => {

                     return(
                        <tr>
                        <td>{linha.id}</td>
                        <td>{linha.status}</td>
                        <td>{linha.descricao}</td>
                        <td>{linha.valorunit}</td>
                        <td>{linha.estoqmin}</td>
                        <td>{linha.estoqmax}</td>
                        <td>
                            <FiEdit size={24} color="blue" cursor="pointer" onClick={(e)=>{editarproduto(linha.id,linha.descricao)}}/>
                            </td>
                        <td>
                            <FiTrash size={24} color="red"  cursor="pointer" onClick={(e)=>{excluirproduto(linha.id,linha.descricao)}}/>
                            </td>
                        </tr>
                     )
                    
                    })
                    
                    
                }
                <th>total de produtos: {quantidade}</th>
            </table>
        </div>
        </div>
: 
 </div>

    )
}