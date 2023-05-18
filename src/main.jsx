import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <div>
   <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
 </div>
)
