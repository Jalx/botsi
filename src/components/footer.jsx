import React from 'react';
import {render} from 'react-dom';
export class Footer extends React.Component {
    render () {
        return (
            <footer className="container">
                    <div className="row">
                        <div className="small-50">
                        <span>Features</span>
                        </div>
                        <div className="small-50">
                        <span>Disclaimer</span>
                        </div>
                        <div className="small-50">
                            <span>Nosotros y Contacto</span>
                        </div>                        
                        <div className="small-50">
                            <span>For Geeks</span>
                        </div>
                    </div>
            </footer>
        ); 
    }
} 