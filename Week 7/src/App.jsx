import React from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing"


function App() {

  //  can not use it outside the browser router
  // const navigate = useNavigate();

  return (
    <div>

      {/* this top bar remains the same thoughout just the content below which wrapped inside th ebrowserroute changes when we change the route */}
      {/*  <div style={{ background: 'black', color: 'white' }}>
        this is the top bar

        <button onClick={() => {

          //  not the right way, if we are doing client side routing. this will bring everything from the backend once again.
          // right way is using the useNavigate hooks  -> using this the page does not reload
          
          // window.location.href = '/';
          navigate('/');
        }}>Landing</button>

        <button onClick={() => {
          navigate('/Dashboard');
        }}>Dashboard</button>

      </div> */}
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>

      {/* this top bar remains the same thoughout just the content below which wrapped inside th ebrowserroute changes when we change the route */}
      <div >

        <button onClick={() => {

          //  not the right way, if we are doing client side routing. this will bring everything from the backend once again.
          // right way is using the useNavigate hooks

          // window.location.href = '/';
          navigate('/');
        }}>Landing</button>

        <button onClick={() => {
          navigate('/Dashboard');
        }}>Dashboard</button>

      </div>
    </div>

  )
}

export default App
