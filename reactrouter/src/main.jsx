import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/contact.jsx'

// const router= createBrowserRouter([
// {
//   path:'/',
//   element:<Layout/>,
//   children: [
// {
//   path:"",
//   element:<Home/>
// },
// {
//   path:"about",
//   element:<About/>
// },
// {
//   path:"contact",
//   element:<Contact/>
// }

//   ]
// }
// ])

//Another method 
const router = createBrowserRouter(
  createRoutesFromElements(
   
    <Route path='/' element={<Layout/>}  >
     <Route path='' element={<Home/>} />
     <Route path='about' element={<About/>} />
     <Route path='contact' element={<Contact/>} />

      </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
  </StrictMode>,
)
