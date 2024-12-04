import './assets/scss/main.scss'
import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router.js'
import { StrictMode } from 'react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  // StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants. Good for Debugging
  // NOTE uncomment to enable Strict mode 
  // <StrictMode>
  //   <RouterProvider router={router} />
  // </StrictMode>

  // NOTE or non Strict mode 
  <RouterProvider router={router} />

)