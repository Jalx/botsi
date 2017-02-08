import React from 'react';
import {render} from 'react-dom';
export class Header extends React.Component {
    render () {
        return (
            <header className="text-center content-section alternate-background">
                <div className="small-container">
                    <h1>Botsi</h1>
                    <img src="../../assets/logo.png" width="125px" alt="Botsi"/>
                    <p>Botsi te ayuda a establecer una comunicación con tus clientes, en Español!</p>
                    <a className="button" href="">Pruébalo</a>
                </div>
            </header>
        );
    }
} 