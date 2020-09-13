import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Select from './components/Select';
import { getPastLaunches } from './services';
import LaunchList from './components/LaunchList';


const App = () => {

  const [launchList, setLaunchList] = useState([])

  useEffect(() => {
    getPastLaunches().then(res => {
      setLaunchList(res.data)
    })
  }, [])

  return(
    <>
      <Header/>
      <Select setLaunchList = {setLaunchList}/>
      <LaunchList launchArr = {launchList}/>
    </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


