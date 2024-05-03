import React,{useState, useEffect} from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import '../../global.css'
import Head from "../componentes/head"
import Menu from "../componentes/menu"
import Header from "../componentes/header"
import { Link, useNavigate } from "react-router-dom";
import { FiEdit,FiTrash } from "react-icons/fi";

export default function Listasaida(){
    const navigate =  useNavigate();

    const[saida, setSaida] = useState([]);
    const [quantidade,setquantidade]= useState();

    function mostrarsaida(){
      
        const banco = JSON.parse(localStorage.getItem("saida") || "[]");
        setquantidade(banco.length)
        setSaida (banco);
    }
    function editarsaida(id, nome){
         alert(`estou editando  a entrada id:${id} |-| do nome: ${nome}`);
         navigate(`/editarentrada/${id}`)
    }
    
       const excluirsaida = (id, nome) => {
            confirmAlert({
              title: 'ban em produto',
              message: 'quer mesmo dar ban nessa entrada?',
              buttons: [
                {
                  label: 'sim, muito cringe, da ban',
                  onClick: () => {
                    const banco = JSON.parse(localStorage.getItem("saida") || "[]");
                    const dadosvelhos = banco.filter( (linha) => linha.id !== id ); 
                    localStorage.setItem("saida", JSON.stringify(dadosvelhos));
                    alert(`saida ${nome} excluido com sucesso`);
                    mostrarsaida();
                    
                  }
                },
                {
                  label: 'nah, o cringe sou eu, produto based mgtow',
                  onClick: () => alert('Click No')
                }
              ]
            });
          };
        
    
    useEffect(()=>{mostrarsaida()},[])
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
             <Head title="Lista de Saídas" />
                     <div>
                     <Link to="/cadastrosaida" className='btn-novo'>Novo</Link>
                     </div>
          
        
         <table>
            <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Data Entrada</th>
            <th></th>
            <th></th>
            </tr>
            
                {
                    saida.map((linha) => {

                     return(
                        <tr>
                        <td>{linha.id}</td>
                        <td>{linha.idproduto}</td>
                        <td>{linha.quantidade}</td>
                        <td>{linha.valorunit}</td>
                        <td>{linha.data}</td>
                        <td>
                            <FiEdit size={24} color="blue" cursor="pointer" onClick={(e)=>{editarsaida(linha.id,linha.idproduto)}}/>
                            </td>
                        <td>
                            <FiTrash size={24} color="red"  cursor="pointer" onClick={(e)=>{excluirsaida(linha.id,linha.idproduto)}}/>
                            </td>
                        </tr>
                     )
                    
                    })
                    
                    
                }
                <th>Total de Saídas: {quantidade}</th>
            </table>
        </div>
        </div>
: 
 </div>

    )
}