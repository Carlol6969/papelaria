import React from "react";
import '../../global.css'
import logo from '../../assets/img/logo.jpg'

export default function logon(){
 return(

    <div className="logon-container">
        <section className="form">
            <img src={logo} width={200} height={200}/>
            <form>
                <input 
                 placeholder="E-mail" 
                 type="email"
                 
                />
                <input 
                 placeholder="Senha" 
                 type="password"
                />
                <button className="button-logon" type="submit">
                    Entrar
                </button>
            </form>

        </section>
    </div>
 )

}