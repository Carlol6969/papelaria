import React from "react";
import '../../global.css'
import Head from "../componenetes/head";
import Menu from "../componenetes/menu";
export default function dashboard(){
    return(
        <div className="dashboard-container">
            <div className="menu">
                <Menu/>

            </div>
            <div className="main">
                <Head/>

            </div>

        </div>

    )
}