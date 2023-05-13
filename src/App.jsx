import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed';
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, userSelect } from './features/userSlice';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Widgets from './Widgets';

function App() {
  const user = useSelector(userSelect)
  const dispatch = useDispatch()
  const auth = getAuth()

  useEffect(()=>{
    onAuthStateChanged(auth,
      authUser =>{
        if(authUser){
          //user is logged in
          dispatch(login({
            email: authUser.email,
            uid: authUser.uid,
            displayName: authUser.displayName,
            photoURL: authUser.photoURL,
          }))
        }
        else {
          //user is logged out
          dispatch(logout())
        }
      })
},[])

  return (
    <div className="app">
     <Header />
     {!user ? <Login />:
     <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
     </div>
     }
     </div>
  );
}

export default App;
