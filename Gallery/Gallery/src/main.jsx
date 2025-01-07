import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Style from './Components/Style/Style.jsx'
import Gallery from './Gallery.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path: "",
        element: <Gallery/>
      },
      {
        path: "Style",
        element: <Style/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
) 