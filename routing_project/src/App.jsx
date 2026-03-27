import {createBrowserRouter,RouterProvider} from 'react-router-dom'  
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar';
import Params from './components/Params';
import Reports from './components/Reports';
import Courses from './components/Courses';
import Users from './components/Users'; 
import NotFound from './components/NotFound';


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <Navbar />
      <Home />  
    </div>,
  },
  {
    path: "/about",
    element: <div>
      <Navbar />
      <About />
    </div>,
  },
  {path: "/dashboard",
    element: <div>
      <Navbar />
      <Dashboard />
    </div>  ,
    children:[
      {
        path:'reports',
        element: <Reports/>
      },{
        path:'courses',
        element: <Courses />
      },{
        path:'users',
        element: <Users />
      }
    ]
  },
  { path: "/:id",
    element: <div>
      <Navbar />
      <Params />
    </div>  
  },
  { path: "*",
    element: <div>
      <Navbar />
      <NotFound />
    </div>
  }
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
