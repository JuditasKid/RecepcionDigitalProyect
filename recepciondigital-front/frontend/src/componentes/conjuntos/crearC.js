import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
//import DataGrid from './grid';
import axios from 'axios';
import app from '../../app.json'
import Conjuntos from './conjuntos';

const { APIHOST } = app





export default class CrearC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            nombre: '',
            nit: '',
            direccion: '',
            administrador: '',
        }
    }



    guardarConjunto() {
        this.setState({loading:true});
        axios.post(`${APIHOST}/conjunto`, {
            nombre: this.state.nombre,
            nit: Number(this.state.nit),
            direccion: this.state.direccion,
            administrador: this.state.administrador,
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
            <Container>
                <Conjuntos/>
                <Form>
                    <div className="form" >

                        <Form.Group className="field padding-bottom--24" >
                            <Form.Label className="elabel">Nombre conjunto</Form.Label>
                            <Form.Control className="boxsize" placeholder="Email" onChange={(e) => this.setState({ nombre: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="field padding-bottom--24" >
                            <Form.Label className="elabel">NIT </Form.Label>
                            <Form.Control className="boxsize" placeholder="Email" onChange={(e) => this.setState({ nit: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="field padding-bottom--24" >
                            <Form.Label className="elabel">Direccion</Form.Label>
                            <Form.Control className="boxsize" placeholder="Email" onChange={(e) => this.setState({ direccion: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="field padding-bottom--24" >
                            <Form.Label className="elabel">Administrador</Form.Label>
                            <Form.Control className="boxsize" placeholder="Email" onChange={(e) => this.setState({ administrador: e.target.value })} />
                        </Form.Group>
                        <Button type="button" onClick={() => { this.guardarConjunto(); }}>
                                guardar Conjunto 
                        </Button>

                    </div>
                </Form>
            </Container>


        );
    }
}

