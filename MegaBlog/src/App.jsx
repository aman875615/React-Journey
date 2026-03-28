import {  useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'  
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import './App.css'

function App() {
 const [loading, setLoading] = useState(true);
 const dispatch = useDispatch();
 useEffect(() => {
  const fetchUser = async () => {
    try {
      const userData = await authService.getCurrentUser();
      if (userData) {
        dispatch(login({userData}));
      }
      else{
        dispatch(logout());
      }
    }

      catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [dispatch]);



  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">

      <div>
        <Headers/>
        <main>
          todo 
        </main>
        <Footer/>
      </div>
      
    </div>
  ) : null
}

export default App
