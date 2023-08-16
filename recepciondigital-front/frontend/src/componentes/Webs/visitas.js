import React from 'react';
import Navbar from './navbar';
import CrearV from '../grid/crearV';
import { Row } from 'react-bootstrap';

export const columns=[
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
    {
        dataField: 'cantidad_viviendas',
        text: 'Cantidad de viviendas',
    },
    {
        dataField: 'tipo_viviendas',
        text: 'Tipo de viviendas',
    },
]

export default class Visitas extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() { 
        return ( 
            <div>
                <div className='contenedor-admin'>
                <Navbar />
                    <div className="Title">
                        <h1><strong>Registro de Visitas</strong></h1>
                    </div>

                    <Row className='busqueda'>
                        <CrearV url="/Rvisitas" columns={columns}/>
                    </Row>

                </div>
            </div>
         );
    }
}
 
