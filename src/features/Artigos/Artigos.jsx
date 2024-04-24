import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import Header from "../../componentes/gerais/Header";
import articles from "../../app/christianityDataList";
import '../../assets/css/Articles.css'

const Article = () => {
    const category = useSelector((state) => state.currentCategoryActiveSlice)

    // Não funcionou
    // function getImageUrl(name) {
    //     return new URL(`./img//${name}.jpg`, import.meta.url).href
    //   }

    return (
        <>
            <Header/>
            <main>
                <section>
                    <ul key='teste'>
                        {articles.map(item => {  
                            const imgUrl = new URL( import.meta.url).href
                            const imgUrl2 = new URL('/img/cruzCity.jpg', import.meta.url).href
                            // alert(imgUrl)
                            return (
                                <>   
                                    <li key={item.title.split(' ')[2]}>
                                        <a> 
                                            <figure>
                                                <img src={`http://localhost:5174/simplesmentecristianismo/img/${item.urlImg}`} />
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

export default Article