import React from "react";
import '../../global.css'
import Head from "../componentes/head"
import Menu from "../componentes/menu"
import Header from '../componentes/header'

export default function Dashboard(){
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
             <Head title="Home" />
            
            </div>
        </div>

 </div>

    )
}