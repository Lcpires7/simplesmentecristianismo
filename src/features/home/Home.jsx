import React from "react";
import '../../assets/css/Home.css'
import Header from "../../componentes/gerais/Header.jsx";

const Home = () => {
    return (
        <>
        <Header/>
        <div>
            <ul>
                <li><a href="simplesmentecristianismo/sobreocristianismo">Sobre o cristianismo</a></li>
                <li><a>Sobre a biblía</a></li>
                <li><a>Indicações de livros</a></li>
            </ul>
        </div>
        </>
    )
}

export default Home