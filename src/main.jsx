import './assets/css/reset.css'
import './assets/css/style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Article from './features/Artigos/Artigos'
// import Home from './features/home/Home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
      {/* <Home /> */}
      <Article />
    </Provider>
  </React.StrictMode>
)
