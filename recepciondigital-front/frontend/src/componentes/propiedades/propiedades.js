import React from "react";
//import axios from 'axios';
//import app from '../../app.json'
import "../../CSS/Admin.css"
//import { Button, Form, Nav, Row } from "react-bootstrap"
//import { BrowserRouter as Link } from 'react-router-dom';
import Propiedades from "./crearP";
import AdminBuscar from "../admins/admins.buscar";
import Navbar from "../Webs/navbar";
import GridPropiedades from "./gridPropiedades";

//const { APIHOST } = app


export const columns = [
    {
        dataField: '_id',
        text: 'ID',
    },
    {
        dataField: 'nombre',
        text: 'Nombre',
    },
    // {
    //     dataField: 'id_edificio',
    //     text: 'ID del edificio',
    // },
    // {
    //     dataField: 'id_propietario',
    //     text: 'ID del propietario',
    // },
];



export default class Propiedades1 extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            
        }
    }


    render() {
        return (
            <div>


                <div className="contenedor-admin">
                    <Navbar/>

                    <div className="Title">
                        <h1><strong>Registrar Propiedades</strong></h1>
                    </div>
                    <Propiedades />

                    <div className="b-prop">
                        <GridPropiedades columns={columns} />
                    </div>
                    <div class="img" />
                </div>
            </div>
        );
    }
}

