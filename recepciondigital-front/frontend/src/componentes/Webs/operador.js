import React from 'react';
import Navbar from './navbar';
import CrearO from '../grid/crearO';

export default class Operador extends React.Component {
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
                        <h1><strong>Registrar Operador</strong></h1>
                    </div>

                    <CrearO/>

                    <div class="img" />

                </div>
                
            </div>
         );
    }
}
 
