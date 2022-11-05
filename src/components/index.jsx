import logo from './logo.svg';
import { Link } from 'react-router-dom';



function Index() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <div className="col-2 pt-1">
                <Link to={"/ejemplos"} className="link-secondary">Ejemplos</Link>
            </div>
        </header>
    );
}

export default Index;