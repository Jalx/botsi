import React from 'react';
import {render} from 'react-dom';
import {Navbar} from './components/navbar.jsx';
import {Header} from './components/header.jsx';
import {Main} from './components/main.jsx';
import {Footer} from './components/footer.jsx';

class App extends React.Component {
    render () {
        return (
        <div>
            <Navbar/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
        );
    }
}

render(<App/>, document.getElementById('root'));