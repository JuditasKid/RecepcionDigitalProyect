import React from 'react';
import { Form, Button} from 'react-bootstrap';
//import Select from './selectinfo';
import axios from 'axios';
import app from '../../app.json'

const { APIHOST } = app


export default class CrearPropiedades extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            nombre: '',
            id_edificio: '',
            id_propietario: '',
            status: '',
        }
    }
    guardarPropiedad() {
        this.setState({loading:true});
        axios.post(`${APIHOST}/apartamento`, {
            nombre: this.state.nombre,
            id_edificio: this.state.id_edificio,
            id_propietario: this.state.id_propietario,
            status: "nohabitado",
        })
            .then((response) => {

                console.log(response);
                
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <Form className="Container-Pro">

                <Form.Group className="field" controlId="formBasicName">
                    <Form.Label className="elabel">Nombre</Form.Label>
                    <Form.Control className="boxsize" placeholder="Nombre" onChange={(e) => this.setState({ nombre: e.target.value })} />
                </Form.Group>
                <Form.Group className="field" controlId="formBasicName">
                    <Form.Label className="elabel">ID del edificio</Form.Label>
                    <Form.Control className="boxsize" placeholder="Nombre" onChange={(e) => this.setState({ id_edificio: e.target.value })} />
                </Form.Group>
                {/* <Form.Group className="field" >
                    <Form.Label className="elabel">Seleccionar Edificio</Form.Label>
                    <Select onChange={(e) => this.setState({ id_edificio: e.target.value })}/>
                </Form.Group> */}
                <Form.Group className="field" controlId="formBasicEmail">
                    <Form.Label className="elabel">ID del propietario</Form.Label>
                    <Form.Control className="boxsize" placeholder="Cedula" onChange={(e) => this.setState({ id_propietario: e.target.value })} />
                </Form.Group>
                <Form.Group className="field" controlId="formBasicEmail">
                    <Form.Label className="elabel">Estado</Form.Label>
                    <Form.Control className="boxsize" placeholder="Cedula" onChange={(e) => this.setState({ status: e.target.value })} />
                </Form.Group>

                <Button type="Button" onClick={() => { this.guardarPropiedad(); }}>Crear Registro</Button>
            </Form>
        );
    }
}
