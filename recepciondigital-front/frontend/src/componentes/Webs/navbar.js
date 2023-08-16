import React from 'react';
import { Nav} from 'react-bootstrap'; 
import Logout from '../login/logout';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            
                <div className="propiedades">
                    <div class="btn-group">
                        <ul className="slide ">
                            <Nav.Item>
                                <li><button><Nav.Link href="/propiedades">Propiedades</Nav.Link></button></li>
                            </Nav.Item>
                            <Nav.Item>
                                <li><button><Nav.Link href="/Operador">Operador</Nav.Link></button></li>
                            </Nav.Item>
                            <Nav.Item>
                                <li><button><Nav.Link href="/Rvisitas">Registro Visitas</Nav.Link></button></li>
                            </Nav.Item>
                            
                            <Logout/>
                        </ul>
                    </div>
                </div>
        );
    }
}

