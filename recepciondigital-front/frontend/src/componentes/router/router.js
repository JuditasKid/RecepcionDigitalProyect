import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "../login/login";
import Operador from "../Webs/operador";
import Visitas from "../Webs/visitas";
// import Admin from "../Webs/admin";
//import Inicio from "../Webs/Inicio";
import PrivateRoute from "../auth/privaterouter";
import Propiedades1 from "../propiedades/propiedades";
import CrearC from "../conjuntos/crearC";


export default function AppRouter() {

    return (
        <Router>
            <Switch>
                <PrivateRoute exact path={["/propiedades"]} component={Propiedades1}/>
                <PrivateRoute exact path={["/conjuntos"]} component={CrearC} />     
                <Route exact path={["/", "/login"]} component={Login} />
                <PrivateRoute exact path={["/operador"]} component={Operador} />
                <PrivateRoute exact path={["/Rvisitas"]} component={Visitas} />
                

                <Route path="/*" component={() => (
                    <h1>
                        404<br /> Pagina no encontrada
                    </h1>
                )} />


            </Switch>
        </Router>
    );
}


