import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import Header from "../../componentes/gerais/Header";
import articles from "../../app/christianityDataList";
import '../../assets/css/Articles.css'

const Article = () => {
    const category = useSelector((state) => state.currentCategoryActiveSlice)
    
    return (
        <>
            <Header/>
            <main>
                <section>
                    <ul>
                        {articles.map(item =>            
                                    <li><a><img src="/img/cruzCity.jpg" /><h3>{item.title}</h3></a></li>
                                   
                        )}
                    </ul>
                </section>
            </main>
        </>
    )
}

export default Article