import React from 'react'
import GoogleMapReact from 'google-map-react';
import {paper,typography , useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './styles';


const Map=({setCoordinates,setBounds,coordinates})=>{
    const classes = useStyles();
    const isMobile= useMediaQuery('(min-width:600px)'); // create is mobile responsive
    

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBFImXtHygXu3kat_fdLc0I8M217GtudG8'}} 
                // this is a api key which is taken from the google map api services
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}   //top right bottom left
                options={''}
                onChange={(e)=>{
                    setCoordinates({lat:e.center.lat,lng:e.center.lng})
                    setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
                }}
                onChildClick={''}  
            >

            </GoogleMapReact>
        </div>    
    );
};

export default Map;
