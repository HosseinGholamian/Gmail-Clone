import React from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom'
import './App.css';
import Header from "./header/Header"
import Sidebar from "./sidebar/Sidebar"
import EmailList from "./EmailList/EmailList"
import Mail from "./Mail/Mail"
import SendMail from './sendMail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from "./Login/Login"
import { setPersistence, onAuthStateChanged, browserSessionPersistence } from "firebase/auth";
import { auth } from './firebase';

function App() {
  var dispatch = useDispatch();


  React.useEffect(() => {
    console.log('here')
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)





  return (
    <>
      {!user ? (<Login />) : (

        <Router>
          <div className="App">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Routes>
                <Route path='mail' element={<Mail />} />
                <Route path='/' element={<EmailList />} />
              </Routes>
            </div>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </Router>
      )}

    </>
  )


}

export default App;
