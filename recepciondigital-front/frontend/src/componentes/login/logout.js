import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class Logout extends React.Component {
    cerrarSesion=()=>{
        cookies.remove('_s',{path:"/"})
        window.location.href='/login'
    }
    
    render() { 

        return ( 
            <div>
                <li><button onClick={()=>this.cerrarSesion()}>Cerrar sesión</button></li>
            </div>
         );
    }
}
