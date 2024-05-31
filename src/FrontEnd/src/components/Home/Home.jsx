import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <div>
            <Navbar/>
            <div  style={{ marginBottom: '200px' }}>Aqui ira el contenido de la pagina principal</div>
            <Footer/>
        </div>
    );
}


export default Home;
