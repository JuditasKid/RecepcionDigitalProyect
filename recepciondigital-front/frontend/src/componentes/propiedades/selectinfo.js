import React from 'react';
import { Form, } from "react-bootstrap"
import axios from 'axios';
import app from '../../app.json'

const { APIHOST } = app

export default class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            _id: []
        }
    }

    componentDidMount() {
        axios.get(`${APIHOST}/edificio/63841323742d899a1fd0e1b1`)
            .then(response => {
                this.setState({ _id: response.data});
                console.log(response.data)

            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        return (
            <Form.Select id="ddlViewBy" className="boxsize" >
                {this.state._id.map(elemento => (
                    <option key={elemento._id} value={elemento._id}>{elemento.nombre}</option>
                ))}

            </Form.Select>
        );
    }
}

