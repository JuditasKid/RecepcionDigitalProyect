import React from 'react';
import {Form, Button} from "react-bootstrap";

export default class CrearO extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() { 
        return (
            <Form className="Container-Op">
                <Form.Group className="field">
                    <Form.Label className="elabel">Nombre</Form.Label>
                    <Form.Control className="boxsize" placeholder="Nombre Completo" onChange={(e) => this.setState({ usuarios: e.target.value })} />
                </Form.Group>
                <Form.Group className="field">
                     <Form.Label className="elabel">Cedula</Form.Label>
                     <Form.Control className="boxsize" placeholder="Número Cedula" onChange={(e) => this.setState({ usuarios: e.target.value })} />
            </Form.Group>

            <Button type="Button">Crear Registro</Button>

            </Form>

            
            
          );
            
    }
}
 
 