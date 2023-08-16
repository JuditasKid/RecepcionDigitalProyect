import React from "react";
import axios from 'axios';
import app from '../../app.json'
import { Container, Form, Button, } from "react-bootstrap";
import '../../CSS/Test.css'
//import HideAndShowPass from "../HidePass/HideAndShowPass"
import '../../CSS/form.css'
import Cookies from "universal-cookie"
import { calcularExpiracionSesion } from "../helper/helper";

import Loading from "../loading/loading";

const { APIHOST } = app
const cookies = new Cookies();

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: '',
            password: '',
        };

    }

    iniciarSesion() {
        this.setState({loading:true});
        axios.post(`${APIHOST}/auth/login`, {
            email: this.state.usuarios,
            password: this.state.password,
        })

            .then((response) => {

                console.log(response);
               
                    cookies.set('_s', response.data.token, {
                        path: "/",
                        expires: calcularExpiracionSesion(),
                    });
                    this.props.history.push(window.open('/propiedades'));
                    this.setState({loading: false});
                   

            })
            .catch((err) => {
                console.log(err);
                this.setState({loading: false});
                const { response } = err;
                const { data } = response;
                const { errors } = data;
                

                if (response.status === 400) {
                    alert(data.msg);
                    alert(errors[0].msg)
                }
                
            });
    }

    render() {
        return (

            <div className="contenedor-test">
                <Loading show={this.state.loading}/>
                <img className='imagen-test' src={require("../../images/recep.jpeg")} alt='imagen test' />
                <Container id="login-container" >
                    
                    <Form id='stripe-login'>
                        
                        <div className="form" >

                            <Form.Group className="field padding-bottom--24" controlId="formBasicEmail">
                                <Form.Label className="elabel">Email address</Form.Label>
                                <Form.Control className="boxsize" placeholder="Email" onChange={(e) => this.setState({ usuarios: e.target.value })} />
                                

                            </Form.Group>

                            <Form.Group className="field padding-bottom--24" controlId="formBasicPassword">
                                <Form.Label >Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                                

                            </Form.Group>

                            <Button type="button" onClick={() => { this.iniciarSesion(); }}>
                                Inicia sesion
                            </Button>

                        </div>
                    </Form>
                </Container>
            </div>
        );
    }
}



