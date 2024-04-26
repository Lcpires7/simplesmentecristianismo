import React from "react";
import '../../assets/css/Home.css'
import Header from "../../componentes/gerais/Header.jsx";

const Home = () => {
    return (
        <>
        <Header/>
            <main>
                <section>
                <div>
                <ul>
                    <li><a className="btn" href="simplesmentecristianismo/sobreocristianismo">Sobre o cristianismo</a></li>
                    <li><a className="btn">Sobre a biblía</a></li>
                    <li><a className="btn">Indicações de livros</a></li>
                </ul>
                </div>
                </section>
            </main>
        </>
    )
}

export default Home