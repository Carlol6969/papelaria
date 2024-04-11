import Menu from "../componenetes/menu"
import Head from "../componenetes/head"
import '../../../src/global.css'
import { useState } from "react"
export default function Cadastrousuario() {
    const [nome,setNome] = useState()
    const [email,setEmail] = useState()
    const [senha,setSenha] = useState()

    const usuario={
        id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
        nome,
        email,
        senha
    };
    const salvardados=(e)=>{
        e.preventDefault();
    const banco = JSON.parse(localStorage.getItem("usuarios")|| "[]")
    banco.push(usuario)
    localStorage.setItem("usuarios",JSON.stringify(banco))
    alert("Deu")
    }
    return (

        <div className="dashboard-container">
            <div className="menu">
                <Menu />

            </div>
            <div className="main">
             <Head  title="Cadastro de Usuário"/>
                <form onSubmit={salvardados}>
                <input type="text" placeholder="Nome" value={nome} onChange={(e)=>setNome(e.target.value)} />

                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />

                <input type="password" placeholder="Senha" value={senha} onChange={(e)=>setSenha(e.target.value)}/>

                    <button className="btn-save">
                        Salvar
                    </button>
                    
                </form>
            </div>

        </div>


    )
}