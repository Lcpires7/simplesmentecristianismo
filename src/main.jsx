import './assets/css/reset.css'
import './assets/css/style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Home from './features/home/Home'
import Articles from './features/Articles/Artigos'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Article from './features/Artigo/Article'

const router = createBrowserRouter([
  {
    path: "/simplesmentecristianismo",
    element: <Home />,
  },
  {
    path: '/simplesmentecristianismo/sobreocristianismo',
    element: <Articles/>
  },
  {
    path: '/simplesmentecristianismo/sobreocristianismo/1',
    element: <Article />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
