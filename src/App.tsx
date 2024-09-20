import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Home from './submodule-a/src/Pages/home';
// const Home = React.lazy(() => import('./submodule-a/src/home'));

function App() {
  return (
    <div className="App">
         <Home/>
    </div>
  );
}

export default App;
