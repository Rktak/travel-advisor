import React,{useState} from 'react'
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl,Select} from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails'
import useStyles from './styles';



const List= ({place}) =>{
    const classes=useStyles();
    const [type,setType]=useState('restuarants');
    const [Rate,setRating]=useState('Rating');

    return (
        <div className={classes.container}>
            <Typography varient='h3'>Hotel and Attraction places near you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=>setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurent</MenuItem>
                    <MenuItem value="hotels">Hotel</MenuItem>
                    <MenuItem value="attractions">Attraction</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={Rate} onChange={(e)=>setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {place?.map((place,i)=>(
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place= {place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default List;
