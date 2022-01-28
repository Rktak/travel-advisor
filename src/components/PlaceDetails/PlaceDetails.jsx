import React from 'react'
import {Box,Typography,Button,Card,CardMedia,CardContent,CardAction,chip} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyle from './styles';

const PlaceDetails=({ place })=>{
    console.log(place.name)
    const classes=useStyle();
    console.log(place);
    return (
        // <h1>place.name</h1>
        <Card elevation={6}>
            <CardMedia
                style={{ height: 200 }}
                image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={place.name}
            />
            <CardContent>
               
                <Typography gutterButtom variant='h5'>{place.name}</Typography>

                <Typography guuterButtom variant='h6'>{place.rating}/5.0</Typography>

                <Typography variant='p' style={{ fontWeight: 600 }} >Address - {place.address}</Typography>
                
            </CardContent>
        </Card>
    );
};

export default PlaceDetails;
