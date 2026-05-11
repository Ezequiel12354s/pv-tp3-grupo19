import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import ListaProyectos from './components/ListaProyectos.jsx'
import Footer from './components/Footer.jsx'
import './css/styles.css'

function App2() {
    return (
        <div className="app">
            <Header />
            <Nav />
            <main className="contenido">
                <ListaProyectos />
            </main>
            <Footer />
        </div>
    )
}

export default App2