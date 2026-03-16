import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import ROUTES from './routes/Routes'
import './app/global.css'

createRoot(document.getElementById('root')).render(<RouterProvider router={ROUTES}/>)
