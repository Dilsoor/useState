import React from 'react'
import ReactDOM from 'react-dom/client'
import AddForm from './addForm'
import App from './App'
import FavouriteColor from './FavouriteColor'
import './index.css'
import Timer from './Timer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FavouriteColor/>
    <AddForm/>
    <Timer/>
  </React.StrictMode>,
)
