import React from 'react';
import {render} from 'react-dom';
import Freezer from 'freezer-js';
var navbarItems = new Freezer({
    features : {
        name: 'Características',
        url: '#características',
    },
    pricing : {
        name: 'Planes',
        url: '#planes'
    },
    about : {
        name: 'Nosotros',
        url: '#nosotros',
    },
});
export class Navbar extends React.Component{
    render () {
        this.state = navbarItems.get();
        return (
            <nav>
                <div className="container">
                    <div className="inline-block float-left">
                        <a className="" href="#!">Botsi</a>
                    </div>
                    <div className="inline-block  float-right">
                        <a className="text-left" href="#!">{this.state.features.name}</a>
                        <a className="text-center" href="#!">{this.state.pricing.name}</a>
                        <a className="text-right" href="#!">{this.state.about.name}</a>        
                    </div>
                </div>
            </nav>
        );        
    };
    componentDidMount (){
        console.log(this.state);
    }
}