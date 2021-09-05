import React from 'react'
import { BrowserRouter } from 'react-router-dom';
//import { Box } from '@material-ui/core';
import { Home } from './components/Home';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Messenger from './components/Messenger';
//import Pro from './components/account/Pro';
{/*}
import Header from './components/Header';
import Home from './components/home/Home';
import UpdateView from './components/post/UpdateView';
import CreateView from './components/post/CreateView';
import DetailView from './components/post/DetailView';

*/}
function App () {
  return(
    <>
    <BrowserRouter>
    <Home/>
    </BrowserRouter>
    </>
   )

 }

export default App;
