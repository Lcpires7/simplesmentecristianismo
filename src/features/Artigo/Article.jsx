import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import '../../assets/css/Article.css'
import articles from "../../app/christianityDataList";
import Header from "../../componentes/gerais/Header";
import parse from 'html-react-parser';

const Article = () => {

    function getData(){
        const value = articles.find(item => item.title === 'O que é o cristianismo');
        return value
    }

    const data = getData()

    return (
        <>
            <Header />
            <main id="article">
            <section>
                <h1>
                    {data.title}
                </h1>
                <article>
                    {parse(data.content)}
                </article>
            </section>
        </main>
        </>
    )
}

export default Article