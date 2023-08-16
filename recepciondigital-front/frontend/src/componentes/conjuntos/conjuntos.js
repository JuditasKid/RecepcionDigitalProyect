import React from 'react';

//import { request } from '../helper/helper'
import { Container, Row, } from "react-bootstrap"
import DataGrid from './gridConjuntos';

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
        text: 'Rol',
    },
    

];



export default class Conjuntos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    

    render() {


        return (
            <Container id='admins-buscarcontainer'>
                <Row>
                    <DataGrid columns={columns} />
                </Row>
            </Container>
        );
    }
}


