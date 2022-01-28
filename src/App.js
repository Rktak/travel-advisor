import React,{useState,useEffect} from 'react';
import { CssBaseline,Grid } from '@material-ui/core';
// cssBaseline is use for padding, margin, backgroud color
import {getPlacesData} from './api'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'


const App=()=> {
  const [place,setPlace]=useState([]);

  const [coordinates,setCoordinates]=useState();
  const [bounds,setBounds]=useState({sw:{lng:0,lat:0},ne:{lng:0,lat:0}});
  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude,lng:longitude});
    })
  },[]);

  // it track are geo location from are browser



  useEffect(()=>{
    
    getPlacesData(bounds.ne,bounds.sw)
      .then((data)=>{
        console.log('await complete');
        console.log(data);
        setPlace(data);
      })
  },[]);
  // this function return a data that may store at the useState
  console.log(place);

  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid  container spacing={3} style={{width:'100%'}}>
        {/* xs is the for the small device size ans 
            md is for mid size device 
          */}
        <Grid item xs={12} md={4}>
          
          <List place={place}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
      
    </>
  );
}

export default App;
