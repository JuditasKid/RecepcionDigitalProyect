import React from 'react';
import './admins.buscar.css'
//import { request } from '../helper/helper'
import { Container, Row, } from "react-bootstrap"
import DataGrid from '../conjuntos/gridConjuntos';

export const columns = [
    // {
    //     dataField: '_id',
    //     text: 'ID',
    //     hidden: true,
    // },
    {
        dataField: 'nombre',
        text: 'Nombre',
    },
    {
        dataField: 'nit',
        text: 'Nit',
    },
    {
        dataField: 'direccion',
        text: 'direccion',
    },
 
    
];



export default class AdminBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    

    render() {


        return (
            <Container id='admins-buscarcontainer'>
                <Row className='conjunto'>
                    <h3>Buscar Propiedades</h3>
                </Row>
                <Row>
                    <DataGrid columns={columns} />
                </Row>
            </Container>
        );
    }
}


