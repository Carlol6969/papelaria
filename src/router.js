import { BrowserRouter, Route,Routes } from "react-router-dom";

import Logon from "./pages/logon";
import Dashboard from "./pages/dashboard";
import Cadastrousuario from "./pages/cadastroUsuario";
import Cadastroproduto from "./pages/cadastroProduto";
import Cadastroentrada from "./pages/cadastroEntrada";
import Listausuarios from './pages/listaUsuarios';
import Listaprodutos from "./pages/listaProdutos";
import Listaentradas from "./pages/listaEntrada";
import Editarusuario from "./pages/editarUsuario";
import Editarproduto from "./pages/editarProduto";

export default function Rotas(){
return(
    <BrowserRouter>
       <Routes>
        <Route path="/" exact element={<Logon/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/cadastrousuario" element={<Cadastrousuario/>}/>
        <Route path="/cadastroproduto" element={<Cadastroproduto/>}/>
        <Route path="/cadastroentrada" element={<Cadastroentrada/>}/>
        <Route path="/listausuarios" element={<Listausuarios/>}/>
        <Route path="/listaprodutos" element={<Listaprodutos/>}/>
        <Route path="/listaentradas" element={<Listaentradas/>}/>
        <Route path="/editarusuario/:id" element={<Editarusuario/>}/>
        <Route path="/editarproduto/:id" element={<Editarproduto/>}/>
       </Routes>
       
    </BrowserRouter>
)
}