import axios from "axios";
const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



export const getPlacesData=async(ne,sw)=>{
    try{
      console.log(ne,sw);
        const {data: {data} } = await axios.get(URL,{
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude:sw.lng,
              tr_longitude:ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '0c26b96501mshba28fdbe9580284p1fc894jsn8b8342931255'
            }
          });
          console.log('inside await');
        return data;
    }
    catch(error){
        console.log(error);
    }
}





