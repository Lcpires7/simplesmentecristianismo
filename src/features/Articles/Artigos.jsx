import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import Header from "../../componentes/gerais/Header";
import articles from "../../app/christianityDataList";
import '../../assets/css/Articles.css'

const Articles = () => {
    const category = useSelector((state) => state.currentCategoryActiveSlice)

    // Não funcionou
    // function getImageUrl(name) {
    //     return new URL(`./img//${name}.jpg`, import.meta.url).href
    //   }

    return (
        <>
            <Header/>
            <main>
                <section id="articles">
                    <ul key='teste'>
                        {articles.map(item => {  
                            const imgUrl = new URL( import.meta.url).href
                            const imgUrl2 = new URL('/img/cruzCity.jpg', import.meta.url).href
                            // alert(imgUrl)
                            return (
                                <>   
                                    <li key={item.title.split(' ')[2]}>
                                        <a className="card" href="/simplesmentecristianismo/sobreocristianismo/1"> 
                                            <figure>
                                                <img src={`${item.urlImg}`} />
                                            </figure>
                                            <h3>{item.title}</h3>
                                        </a>
                                    </li>
                                </>       
                            )                           
                        })}
                    </ul>
                </section>
            </main>
        </>
    )
}

export default Articles